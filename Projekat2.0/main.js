let myLists = document.getElementsByTagName("LI");
        for (let i = 0; i < myLists.length; i++) {
            let span = document.createElement("P");
            let symbol = document.createTextNode("x");
            span.className = "clear";
            span.appendChild(symbol);
            myLists[i].appendChild(span);
        }

        function newTask() {

            let li = document.createElement("LI");
            let a = document.createElement("A");
            let inputText = document.getElementById("inputTask").value;
            let t = document.createTextNode(inputText);
            a.appendChild(t);
            li.appendChild(a);
            if (inputText === '') {
                alert("Write something!");
            } else {
                document.getElementById("taskLista").appendChild(li);
            }
            let span = document.createElement("P");
            let txt = document.createTextNode("x");
            span.className = "clear";
            span.appendChild(txt);
            li.appendChild(span);
            let clear = document.getElementsByClassName("clear");
            for (let i = 0; i < clear.length; i++) {
                clear[i].onclick = function() {
                    let question = confirm("Are you sure you want to clear this task?");
                    if (question == true) {
                        let lis = this.parentElement;
                        lis.style.display = "none";
                    }
                }
                const myListObj = document.getElementById("taskLista").innerHTML;
                localStorage.setItem('savedListObj', myListObj);

            }
            document.getElementById("inputTask").value = '';

            const myListObj = document.getElementById("taskLista").innerHTML;
            localStorage.setItem('savedListObj', myListObj);
        }

        function clearAll() {
            let question = confirm("Are you sure you want to clear all tasks?");
            if (question == true) {
                let allTasks = document.getElementById("taskLista");
                let sveListe = allTasks.querySelectorAll("LI");
                for (let i = 0; i < sveListe.length; i++) {
                    allTasks.removeChild(sveListe[i]);
                }
            }
        }

        function filterTask() {
            let input, filter, ul, li, a, i;
            input = document.getElementById("filterInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("taskLista");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        const displayList = document.getElementById("taskLista");
        displayList.innerHTML = localStorage.getItem('savedListObj');
        let clear = document.getElementsByClassName("clear");
        for (let i = 0; i < clear.length; i++) {
            clear[i].onclick = function() {
                let question = confirm("Are you sure you want to clear this task?");
                if (question == true) {
                    let lis = this.parentElement;
                    lis.style.display = "none";
                }
            }
        }

        function saveList() {
            const myListObj = document.getElementById("taskLista").innerHTML;
            localStorage.setItem('savedListObj', myListObj);
            if (typeof window.Storage === 'undefined') {
            alert('Storage turned off...');
}
        }