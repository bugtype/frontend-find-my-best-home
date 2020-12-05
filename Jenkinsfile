pipeline {
    agent { 
        docker { 
                image 'node:12.18.3-alpine'
            }
        }
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
        stage('Testing') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Building') {
            steps {
                echo 'Building..'
                sh 'npm run build'
            }
        }
    }
}