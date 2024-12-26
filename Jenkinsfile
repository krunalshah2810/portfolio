pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                git branch: 'master', url: 'https://github.com/krunalshah2810/portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    docker.build('portfolio-app')
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    docker.image('portfolio-app').inside {
                        sh 'npm install' // Ensure dependencies are installed
                        sh 'npm test' // Replace this with your actual test command
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                script {
                    sh 'docker stop portfolio-app-container || true' // Stop the container if it exists
                    sh 'docker rm portfolio-app-container || true' // Remove the container if it exists
                    sh 'docker run --name portfolio-app-container -d -p 80:3000 portfolio-app' // Adjust ports as needed
                }
            }
        }
    }
}
