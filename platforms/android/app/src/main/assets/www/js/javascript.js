var server="http://localhost/";
      var user;
      var id;
      var idR;
      var puntuacion=0;
      var rest;
      var puntaje=0;

      //Metodos

      function doLogin(user, pass){ 
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/login/"+user+"/"+pass,
          dataType: "text",
            success: function(data){
              alert(data);
                if(data==="Bienvenido!") App.load('page2', 'slide-left');
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });

      }

      function createUser(user, email, pass){  
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/newUser/"+user+"/"+email+"/"+pass,
          dataType: "text",
            success: function(data){
              alert("Se ha creado tu cuenta!");
              App.load('home', 'slide-left');
            },
            error: function(html){
              console.log("Not Working " + html);
              alert("Cuenta existente, intenta con otro nombre de usuario o con un correo no registrado.");
            }
        });
      }

      function puntuarStar(puntuacion){  
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/punt/"+user+"/"+puntuacion+"/"+rest,
          dataType: "text",
            success: function(data){
              alert("Puntuacion enviada!");
              App.load('page2', 'slide-left');
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });
      }
      
      function valR(rest){  
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/llenarValoracion/"+rest,
          dataType: "json",
            success: function(data){
              $puntaj=data[0].promedio;
              puntaje=parseInt($puntaj);
              //console.log(puntaje);
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });
      }

      function editVal(puntaje, rest){
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/puntV/"+puntaje+"/"+rest,
          dataType: "text",
            success: function(data){
              console.log(rest);
              console.log(puntaje);            
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });
      }

      function menu(rest){
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/menu/"+rest,
          dataType: "json",
            success: function(data){
              for(i=0; i<17;i++) {
                $name=data[i].name;
                document.getElementById("namem").innerHTML+= $name + "<br> <br>";
                $precio=data[i].precio;
                document.getElementById("precio").innerHTML+="&#8353;" + $precio + "<br> <br>";
              }
            },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function titleRest(idT){  
        $.ajax({
                type: "GET",
                url: server+"Interactivas2/ds/public/dba/title/"+idT,
                dataType: "json",
                success: function(data){
                  //console.log(data);
                  $name=data[0].name;
                  $valoracion=data[0].valoracion;
                  $numero=data[0].numero;
                  $valor=parseInt($valoracion);
                  document.getElementById("menuTitle").innerHTML= "<br>"+$name;  
                  document.getElementById("menuNum").innerHTML= $numero+"<br>";

                    if($valor==5){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star star star star star</i><br>";
                    }
                    if($valor==4){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star star star star star_border</i><br>";
                    }
                    if($valor==3){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star star star star_border star_border</i><br>";
                    }
                    if($valor==2){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star star star_border star_border star_border</i><br>";
                    }
                    if($valor==1){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star star_border star_border star_border star_border</i><br>";
                    }
                    if($valor==0){
                      document.getElementById("menuVal").innerHTML= "<i class=' material-icons md-18'>star_border star_border star_border star_border star_border</i><br>";
                    }
                },
                error: function(html){
                  console.log("Not Working " + html);
                }
            });
      }

      function updateUser(user, email, pass){ 
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/updateP/"+id+"/"+user+"/"+email+"/"+pass,
          dataType: "text",
            success: function(data){
              App.load('page2', 'slide-left');
              alert("Se han guardado los datos.");
            },
            error: function(html){
              console.log("Not Working " + html);
              alert("Rellena todos los datos.");
            }
        });
      }

      function valorar(){
        $.ajax({      
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star_border</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star_border</i>";   
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function valorar1(){
        $.ajax({
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star_border</i>";     
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function valorar2(){
        $.ajax({  
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star_border</i>";    
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function valorar3(){
        $.ajax({ 
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star_border</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star_border</i>";    
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function valorar4(){
        $.ajax({
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star_border</i>";   
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function valorar5(){
        $.ajax({ 
          success: function(){
            document.getElementById("star").innerHTML= "<i class='material-icons star'>star</i>";
            document.getElementById("star1").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star2").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star3").innerHTML= "<i class='material-icons star'>star</i>";  
            document.getElementById("star4").innerHTML= "<i class='material-icons star'>star</i>";   
          },
          error: function(html){
            console.log("Not Working " + html);
          }
        });
      }

      function userInfo(){
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/user/"+user,
          dataType: "json",
            success: function(data){    
              id=data[0].id;
              $name=data[0].name;
              $email=data[0].email;
              $pass=data[0].password;
              document.getElementById("editusr").value= $name ;
              document.getElementById("editemail").value= $email ;  
              //document.getElementById("editpwd").value= $pass ;  
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });
      }
      
      function showRestaurants(){
        $.ajax({
          type: "GET",
          url: server+"Interactivas2/ds/public/dba/show",
          dataType: "json",
            success: function(data){
              for(i=0; i<21;i++) {
                $name=data[i].name;
                document.getElementById("name").innerHTML+= $name + "<br> <br>";
                $valo=data[i].valoracion;
                $valor=parseInt($valo);
                if($valor==5){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star star star star star</i><br>";
                }
                if($valor==4){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star star star star star_border</i><br>";
                }
                if($valor==3){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star star star star_border star_border</i><br>";
                }
                if($valor==2){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star star star_border star_border star_border</i><br>";
                }
                if($valor==1){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star star_border star_border star_border star_border</i><br>";
                }
                if($valor==0){
                  document.getElementById("valo").innerHTML+= "<i class='margini material-icons md-18'>star_border star_border star_border star_border star_border</i><br>";
                }
              }
            },
            error: function(html){
              console.log("Not Working " + html);
            }
        });
      }

    //Llamada metodos

      App.controller('home', function (page) {

        $(page).on('appShow', function () {
          console.log('the user can see it!');
        });
  
        $(page)
          .find('.app-button1')
            .on('click', function () {
            console.log('button was clicked!');
            var usr=$('#usr').val();
            var pwd=$('#pwd').val();
            user=usr;
            console.log(usr);
            //console.log(pwd);
            doLogin(usr, pwd);
        });

        $(page)
          .find('.app-button2')
            .on('click', function () {
            console.log('button was clicked!');
            App.load('page3', 'slide-left');
        });
      });

      App.controller('page2', function (page) {
        $(page).on('appShow', function () {
          showRestaurants();
        });

        $(page)
          .find('#chelips')
            .on('click', function () {
              rest=('chelips');
              idT=('1');
              App.load('page4', 'slide-left');
              //console.log(rest);   
         });

        $(page)
          .find('#rockets')
            .on('click', function () {
              rest=('rockets');
              idT=('2');
              //console.log(rest);
              App.load('page4', 'slide-left');
        });

        $(page)
          .find('#macho')
            .on('click', function () {
              rest=('macho');
              idT=('3');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#pizzaH')
            .on('click', function () {
              rest=('pizzah');
              idT=('4');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#contenedor')
            .on('click', function () {
              rest=('contendor');
              idT=('5');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#safu')
            .on('click', function () {
              rest=('safu');
              idT=('6');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#elrio')
            .on('click', function () {
              rest=('elrio');
              idT=('7');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#musashi')
            .on('click', function () {
              rest=('musashi');
              idT=('8');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#chicochilis')
            .on('click', function () {
              rest=('chicochilis');
              idT=('9');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#rinconchino')
            .on('click', function () {
              rest=('rinconchino');
              idT=('10');
              App.load('page4', 'slide-left');
              //console.log(rest);
        });

        $(page)
          .find('#pizzeriasr')
            .on('click', function () {
              rest=('pizzeriasr');
              idT=('11');
              App.load('page4', 'slide-left');
              //console.log(rest);   
        });

        $(page)
          .find('#patio')
            .on('click', function () {
              rest=('elpatio');
              idT=('12');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });


        $(page)
          .find('#arepazo')
            .on('click', function () {
              rest=('arepazo');
              idT=('13');
              App.load('page4', 'slide-left');
              //console.log(rest);
        });

        $(page)
          .find('#pizzaparque')
            .on('click', function () {
              rest=('pizzaparque');
              idT=('14');
              App.load('page4', 'slide-left');
              //console.log(rest);   
        });

        $(page)
          .find('#pollitas')
            .on('click', function () {
              rest=('pollitas');
              idT=('15');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#pollogranjero')
          .on('click', function () {
              rest=('pollogranjero');
              idT=('16');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#bienvenidos')
            .on('click', function () {
              rest=('bienvenidos');
              idT=('17');
              App.load('page4', 'slide-left');
              console.log(rest); 
        });

        $(page)
          .find('#olga')
            .on('click', function () {
              rest=('olga');
              idT=('18');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#pizzapata')
            .on('click', function () {
              rest=('pizzapata');
              idT=('19');
              App.load('page4', 'slide-left');
              //console.log(rest); 
        });

        $(page)
          .find('#pizzareal')
            .on('click', function () {
              rest=('pizzareal');
              idT=('20');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#faiwong')
            .on('click', function () {
              rest=('faiwong');
              idT=('21');
              App.load('page4', 'slide-left');
              //console.log(rest);  
        });

        $(page)
          .find('#profile')
            .on('click', function () {
              App.load('page5', 'slide-left'); 
        });

        $(page)
          .find('#exit')
            .on('click', function () {
              App.load('home', 'slide-left');   
        });   
      });

      App.controller('page3', function (page) {
          $(page)
          .find('.app-button2')
            .on('click', function () {
              var newusr=$('#newusr').val();
              var newpwd=$('#newpwd').val();
              var newemail=$('#newemail').val();
              console.log(newusr);
              //console.log(newpwd);
              console.log(newemail);
              createUser(newusr, newemail, newpwd);
          }); 

          $(page)
          .find('#dataBack')
            .on('click', function () {
              App.load('home', 'slide-right');  
        });

        });

      App.controller('page4', function (page) {
        $(page).on('appShow', function () {
          titleRest(idT);
          menu(rest);
        });

        $(page)
          .find('#profile')
            .on('click', function () {
              App.load('page5', 'slide-left'); 
        });

        $(page)
          .find('#exit')
            .on('click', function () {
              App.load('home', 'slide-left');  
        });

        $(page)
          .find('#valorarRest')
            .on('click', function () {
              App.load('page6', 'slide-left'); 
        });

        $(page)
          .find('#dataBack')
            .on('click', function () {
              App.load('page2', 'slide-right');    
        });    
      });

      App.controller('page5', function (page) {
        $(page).on('appShow', function () {
          userInfo();
        });
          
        $(page)
          .find('#dataBack')
            .on('click', function () {
              App.load('page2', 'slide-right');  
        });

        $(page)
          .find('.app-button2')
            .on('click', function () {
              var editusr=$('#editusr').val();
              var editpwd=$('#editpwd').val();
              var editemail=$('#editemail').val();
              console.log(editusr);
              //console.log(editpwd);
              console.log(editemail); 
              updateUser(editusr, editemail, editpwd)
        });
      });

      App.controller('page6', function (page) {
        $(page).on('appShow', function () {
          valorar();
          valR(rest);  
        });

        $(page)
          .find('#star')
            .on('click', function () {
              valorar1();
              puntuacion=1;
        });

        $(page)
          .find('#databack')
            .on('click', function () {
              App.load('page2', 'slide-right');
        });

        $(page)
          .find('#star1')
            .on('click', function () {
              valorar2();
              puntuacion=2;
        });

        $(page)
          .find('#star2')
            .on('click', function () {
              valorar3();
              puntuacion=3;
        });

        $(page)
          .find('#star3')
            .on('click', function () {
              valorar4();
              puntuacion=4;
        });

        $(page)
          .find('#star4')
            .on('click', function () {
              valorar5();
              puntuacion=5;
        });

        $(page)
          .find('#dataBack')
            .on('click', function () {
              App.load('page2', 'slide-right');   
        });

        $(page)
          .find('#enviar')
            .on('click', function () {
              puntuarStar(puntuacion);
              editVal(puntaje,rest);
        });
      });
          
      try {
        App.restore();
      } catch (err) {
        App.load('home');
      }