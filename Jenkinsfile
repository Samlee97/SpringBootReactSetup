pipeline {
    agent any
    
    tools {nodejs "nodejs" maven "mymaven"}
     
   
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh "mvn clean install"
            }
        }
    }
}
