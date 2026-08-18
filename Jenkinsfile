pipeline {
    agent any

    stages {
        stage('Checkout Source') {
            steps {
                echo 'Pulling project source code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing required dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Executing application build process...'
                bat 'npm run build --if-present'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing test cases...'
                bat 'npm test'
            }
        }
    }
}