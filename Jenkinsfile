pipeline {
  agent any
  
  stages {
    stage("build") {
      steps {
        sh 'cd /var/jenkins_home/workspace/demo-pipeline_main/'
        sh 'npm run install'
        sh 'npm run build:process'
      }
    }    
  }
}
