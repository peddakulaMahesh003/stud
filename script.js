
        function submitData() {
            let name = document.getElementById("name").value;
            let event = document.getElementById("event").value;

            if (name === "" || event === "") {
                alert("Please enter all details");
            } else {
                document.getElementById("result").innerHTML =
                    "Student Name: " + name +
                    "<br>Selected Event: " + event;
            }
        }
   