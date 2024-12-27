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
                sh 'docker build -t portfolio-app .'
            }
        }
        // stage('Test') {
        //     steps {
        //         echo 'Running tests...'
        //         sh '''
        //         docker run --rm portfolio-app npm install
        //         docker run --rm portfolio-app npm test
        //         '''
        //     }
        // }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh '''
                docker stop portfolio-app-container || true
                docker rm portfolio-app-container || true
                docker run --name portfolio-app-container -d -p 80:3000 portfolio-app
                '''
            }
        }
    }
}
