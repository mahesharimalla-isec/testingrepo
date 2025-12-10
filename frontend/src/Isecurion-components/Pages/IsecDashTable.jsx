import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGreaterThan, faLessThan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './pages-css/IsecDashTable.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../../REDUX_ISECURION/projectList/projectlistAction';
import { io } from 'socket.io-client';
import { useAuth } from '../../Context/UserContext';


const IsecDashTable = () => {

  const projects = useSelector((state) => state.projectlist.projects);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const history = useNavigate('');

  const [currentPage, setCurrentPage] = useState(1);


  const socket = io('http://18.207.195.77:5050');

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch("http://18.207.195.77:5050/fetchprojectlist", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const projectList = await response.json();

      if (!Array.isArray(projectList)) {
        throw new Error("Expected an array of projects");
      }

      const sortedProject = projectList.sort((a, b) => {
        const statusOrder = ['inprogress', 'retesting', 'completed'];
        const statusA = a.status.toLowerCase();
        const statusB = b.status.toLowerCase();
        return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
      });

      dispatch(setProjects(sortedProject));
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    }
  };


  useEffect(() => {
    fetchProjectDetails()
    socket.on('projectListUpdate', async () => {
      await fetchProjectDetails();
    });

    return () => {
      socket.disconnect();
    };
  }, [])

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < getTotalPages()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getTotalPages = () => {
    return Math.ceil((projects ?? []).length / projectsPerPage);
  };

  const getPageProjects = () => {
    if (!projects) {
      return [];
    }
    const slicedProjects = projects.slice(startIndex - 1, endIndex - 1);

    return slicedProjects.map((project, index) => ({
      ...project,
      slNo: startIndex + index,
    }));
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const getStatus = (status) => {
    if (status === 'Inprogress') {
      return 'congoing';
    } else if (status === 'Retesting') {
      return 'cretesting';
    } else if (status === 'Completed') {
      return 'cfixed';
    }
    return '';
  };

  const projectsPerPage = 10;
  const startIndex = (currentPage - 1) * projectsPerPage + 1;
  const endIndex = startIndex + projectsPerPage;

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.applicationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='table-list-dash'>
      <div className='wrap-head-table'>
        <div className='wraphead'>
          <div className='head3'>
            <h3>Project List</h3>
          </div>
          <div className='isecurion_search-box'>
            <button className={inputFocused ? 'isecurion_btn-search' : 'isecurion_add_button'}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type='text'
              className='isecurion_input-search'
              placeholder='Search by client, project name, application type or status'
              onChange={handleSearchInput}
              value={searchQuery}
              data-testid="search-input"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </div>
        </div>

        <div className='wraptable'>
          <table className='taablist'>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>No.</th>
                <th>Client</th>
                <th>Project Name</th>
                <th>Application</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className='class-tr'>
              {filteredProjects.length === 0 ? (
                <tr className='collapsetable' >
                  <td colSpan='6'>Projects not found....</td>
                </tr>
              ) : (
                filteredProjects.slice(startIndex - 1, endIndex - 1).map((project, index) => (
                  <tr
                    key={project._id}
                    onClick={() => history(`/isecurion_dash/status/${project._id}`)}
                    state={{ projectData: project }}
                  >
                    <td style={{ textAlign: "left" }}>{startIndex + index}.</td>
                    <td>{project.clientName}</td>
                    <td className='multiline'>{project.projectName}</td>
                    <td>{project.applicationType}</td>
                    <td>{formatDate(project.testStartDate)}</td>
                    <td className={getStatus(project.status)}>{project.status}</td>
                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>

        <hr />

        <div className='additional-page'>
          <div className='table_size'>

            {filteredProjects.length === 0 ? (
              ""
            ) :
              searchQuery ? (
                <p>
                  {startIndex} - {Math.min(startIndex + getPageProjects().length - 1, filteredProjects.length)} of {filteredProjects.length}
                </p>
              ) : (
                <p>
                  {startIndex} - {Math.min(startIndex + getPageProjects().length - 1, projects.length)} of {projects.length}
                </p>
              )}

            {filteredProjects.length === 0 ? (
              <div style={{ marginRight: "20px" }}></div>
            ) : (
              <div className='wrap-pages'>
                <button
                  data-testid='previous_page'
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faLessThan} />
                </button>
                <p data-testid='current_page'>{currentPage}</p>
                <button data-testid='next_page' onClick={handleNextPage} disabled={currentPage === getTotalPages()}>
                  <FontAwesomeIcon icon={faGreaterThan} />
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default IsecDashTable;
