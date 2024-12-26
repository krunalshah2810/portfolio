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
                        sh 'npm test' // Replace this with your actual test command
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                script {
                    docker.run('--name portfolio-app-container -d -p 80:80 portfolio-app') // Adjust ports if necessary
                }
            }
        }
    }
}
