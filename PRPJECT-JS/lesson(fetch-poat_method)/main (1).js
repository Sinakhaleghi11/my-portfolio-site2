        

        async function login() {
            let username = document.getElementById('uname').value;
            let password = document.getElementById('pass').value;
            
            let pp = new FormData();
            pp.append('username', username);
            pp.append('password', password);

            let address = `http://127.0.0.1:5000/login`
            let res = await fetch(address , {
                method: 'POST',
                body: pp
            });

            if(res.status == 200) {
                let data = await res.json();
                localStorage.setItem('token', data.token);
                window.location.href = 'recipe.html';
            } else {
                alert('login failed');
            }
            
        }
        
