pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'master', url: 'https://github.com/krunalshah2810/portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('portfolio-app')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('portfolio-app').inside {
                        sh 'npm test' // Replace with your app's test command
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.run('portfolio-app', '-d -p 80:80') // Adjust ports
                }
            }
        }
    }
}
