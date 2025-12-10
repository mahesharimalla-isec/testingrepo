pipeline {
  agent any

  environment {
    FRONTEND_IMAGE = "bugtracker-frontend:latest"
    BACKEND_IMAGE  = "bugtracker-backend:latest"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Frontend Docker Image') {
      steps {
        dir('frontend') {
          sh 'docker build -t $FRONTEND_IMAGE .'
        }
      }
    }

    stage('Build Backend Docker Image') {
      steps {
        dir('backend') {
          sh 'docker build -t $BACKEND_IMAGE .'
        }
      }
    }

    stage('Deploy Containers') {
      steps {
        sh '''
          docker stop frontend || true && docker rm frontend || true
          docker stop backend || true && docker rm backend || true

          docker run -d --name frontend -p 8000:80 $FRONTEND_IMAGE
          docker run -d --name backend -p 5000:5000 $BACKEND_IMAGE
        '''
      }
    }
  }
}
