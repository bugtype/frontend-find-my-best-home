pipeline {
    agent { docker { image 'node:10-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Package install') {
            steps {
                echo 'install..'
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm run build'
            }
        }
    }
}