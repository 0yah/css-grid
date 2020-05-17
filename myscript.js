
        window.addEventListener('scroll', amScrolling)
        var imageUrl = '';
        var scrollPercentage = 0;
        var rootLayoutInitialPosition = document.querySelector('.rootLayout').getBoundingClientRect().y;

        console.log(rootLayoutInitialPosition);

        function amScrolling() {
           // scrollPercentage = ((window.scrollY / window.innerHeight) / 2) * 100

           var rootLayoutCurrentPosition = document.querySelector('.rootLayout').getBoundingClientRect();
           //console.log(rootLayoutCurrentPosition);
          // console.log(rootLayoutInitialPosition);
           

           if(rootLayoutInitialPosition < window.scrollY ){
                   document.getElementById('myLayout').classList.add("sticky");
                   
           }else{
            document.getElementById('myLayout').classList.remove("sticky");
                
           }

           document.querySelector('#myLayout').style.setProperty('opacity', window.scrollY/rootLayoutInitialPosition);
           var ni = window.scrollY/rootLayoutInitialPosition;
           if(ni>1){

            //console.log(Math.abs(window.scrollY/rootLayoutInitialPosition));
            var t = Math.abs(window.scrollY/rootLayoutInitialPosition);
            var scrollPercentage = (Math.abs(window.scrollY/rootLayoutInitialPosition) - Math.floor(t))*100;
           }


            if (scrollPercentage <= 20) {

                imageUrl = 'https://images.unsplash.com/photo-1548615670-65a2d5c9e53a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
                        document.querySelector('.changeMe').setAttribute('src', imageUrl);
             

            } else
                if (scrollPercentage <= 40) {
                    imageUrl = 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1010&q=80';
                        document.querySelector('.changeMe').setAttribute('src', imageUrl);

                } else
                    if (scrollPercentage <= 60) {
                        imageUrl = 'https://images.unsplash.com/photo-1554490754-c1f912ac1b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
                        document.querySelector('.changeMe').setAttribute('src', imageUrl);
                    }  else {


                            }


            //console.log(scrollPercentage);

        }
