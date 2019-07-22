pipeline {
    agent any
    
    tools {nodejs "nodejs"}
     tools {maven "mymaven"}
   
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh "mvn clean install"
            }
        }
    }
}
