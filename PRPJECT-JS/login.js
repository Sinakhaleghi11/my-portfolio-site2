


/*alert("welcome to our new platform which borned by dr.sina khaleghi")*/

async function login(event) {

    event.preventDefault();

    let u = document.getElementById('useName').value
    let p = document.getElementById('password').value


    let ersal = new FormData()
    ersal.append('username', u);
    ersal.append('password', p);
    let adres = `http://46.100.94.88:3000/login`


    try {
        let result = await fetch(adres, {
            method: 'POST',
            body: ersal
        });



        if (result.status == 200) {

            let data = await result.json();
            localStorage.setItem('token', data.token);
            window.location.href = 'posts.html'

        }

        else {

            alert("Login failed");
            
        }
    }

    catch (error) {
        console.error("the error:", error);

    }


}



