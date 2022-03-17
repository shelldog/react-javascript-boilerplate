pipeline {
  stages {
    stage("build") {
      steps {
        sh 'npm run install'
        sh 'npm run build:process'
      }
    }    
  }
}
