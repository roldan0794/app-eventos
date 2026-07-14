terrafrom {
 required version = ">=1.0.0"
 required providers { 
  local = {
   source = "hashicorp/local"
   version = "~> 2.5"
  }
 }
}

resource "local_file" "framwork_info" {
 filename = "${path.module}/framework-info.txt"
 content = "Framework Devops inicial creado con Terraform en laboratorio local"
}
