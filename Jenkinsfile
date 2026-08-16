pipeline {

    // take available agent
    agent any 

    stages {
        stage("Install Dependencies") {
            steps {
                bat 'npm install'
            }
        }

        stage("Build") {
            steps {
                bat 'npm run build'
            }
        }
    }
}