import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page-css/ClientDashTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../../REDUX_CLIENT/projectList/cltprojectListActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/UserContext';
import { io } from 'socket.io-client';

const ClientDashTable = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const projects = useSelector((state) => state.cltprojectList.projects);
  const dispatch = useDispatch();

  const history= useNavigate()


  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const fetchClientProject = async () => {
    try {
      const response = await fetch('http://18.207.195.77:5050/fetchclientprojectlist', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })

      const clientProject= await response.json()
      const sortedProject = clientProject.sort((a, b) => {
        const statusOrder = ['inprogress', 'retesting', 'completed'];
        const statusA = a.status.toLowerCase();
        const statusB = b.status.toLowerCase();
        return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
      });

      dispatch(setProjects(sortedProject));

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const socket = io('http://18.207.195.77:5050');
    fetchClientProject();

    socket.on('newProject', (data) => {
        fetchClientProject();
    });

    return () => {
      socket.disconnect();
    };

  }, []);


  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.applicationType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.status.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const getTotalPages = () => {
    return Math.ceil((filteredProjects ?? []).length / projectsPerPage);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const getPageProjects = () => {
    if (!filteredProjects) {
      return [];
    }

    const slicedProjects = filteredProjects.slice(startIndex, endIndex);

    return slicedProjects.map((project, index) => ({
      ...project,
      slNo: startIndex + index + 1,
    }));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage < getTotalPages() ? prevPage + 1 : prevPage);
  };

  const getStatus = (status) => {
    if (status === 'Inprogress') {
      return 'ongoing';
    } else if (status === 'Retesting') {
      return 'retesting';
    } else if (status === 'Completed') {
      return 'completed';
    }
    return '';
  };

  return (
    <div className='client-table-list-dash'>
      <div className='client-wraphead'>
        <div className='background'>
          <div className='client-head3'>
            <h3>Project List</h3>
            <div className='client_search-box'>
              <button className={inputFocused ? 'client_btn-search_focused' : "client_btn-search"}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type='text'
                className='client_input-search'
                placeholder='Search by project, application type or status'
                onChange={handleSearchInput}
                value={searchQuery}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />

            </div>
          </div>
          <div className='client-wraptable'>
            <table className='client-taablist'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Project Name</th>
                  <th>Application Type</th>
                  <th>Start Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className='class-trclient'>
                {filteredProjects.length === 0 ? (
                  <tr className='collapsetable'>
                    <td colSpan='5'>Records not Found....</td>
                  </tr>
                ) : (
                  getPageProjects().map((project) => (
                    <tr
                      key={project.projectId}
                      onClick={() => history(`/client_dash/status/${project.projectName}`)}
                    >
                      <td>{project.slNo}</td>
                      <td>{project.projectName}</td>
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
          <div className='additional-clientpage'>

            <div className='clientpage_size'>

              {filteredProjects.length === 0 ? "" : (
                <p>
                  {startIndex + 1} - {Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length}
                </p>
              )}




              {filteredProjects.length === 0 ?
                "" : (
                  <div className='wrap-clientpage'>
                    <button
                      data-testid='previous_page'
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}>
                      <FontAwesomeIcon icon={faLessThan} />
                    </button>
                    <p data-testid='current_clientpage'>{currentPage}</p>
                    <button
                      data-testid='next_page'
                      onClick={handleNextPage}
                      disabled={currentPage === getTotalPages()}
                    >
                      <FontAwesomeIcon icon={faGreaterThan} />
                    </button>
                  </div>
                )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashTable;
