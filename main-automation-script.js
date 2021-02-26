var myToDo = {

    titleArray: ["Buy Shoes", "Buy Coffee", "Clean the House", "Service the Car", "Prepare for Exam", "Prepare Meal", "Take Medicines", "Order Milk"],

    randomTitle: function() {
        return myToDo.titleArray[Math.floor(Math.random() * myToDo.titleArray.length)]
    },

    createTask: function() {
        for (let i = 0; i < 5; i++) {
            document.querySelector("input.new-todo").value = myToDo.randomTitle();
            document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
                "bubbles": true
            }));
        }
    },

    checkTasks: function() {
        let allRadio = document.querySelectorAll("ul > li > div > input");
        for (let i = 1; i < allRadio.length; i++) {
            allRadio[Math.floor(Math.random() * allRadio.length)].click();
        }
    },

    activeTasks: function() {
        document.querySelector("body > section > footer > ul > li:nth-child(2) > a").click();
    },
    completedTasks: function() {
        document.querySelector("body > section > footer > ul > li:nth-child(3) > a").click();
    },
    deleteTask: function() {
        document.querySelector("ul > li:nth-child(1) > a").click();
        let buttons = document.querySelectorAll("ul > li > div > button.destroy");
        buttons[Math.floor(Math.random() * buttons.length)].click();
    },
    updateTasks: function() {
        document.querySelector("body > section > section > ul > li > div > label").dispatchEvent(new Event('dblclick',{
            "bubbles": true
        }));
        document.querySelector("body > section > section > ul > li.editing > input").value += " Updated!";
        document.querySelector("body > section > section > ul > li.editing > input").dispatchEvent(new Event('blur',{
            "bubbles": true
        }));
    },
    toggleAll: function() {
        let i = 0;
        let intervalID1 = setInterval(()=>{
            document.querySelector("#toggle-all").click();
            i++;
            if (i >= 3) {
                clearInterval(intervalID1);
            }
        }
        , 1000)

    },
    clearAll: function() {
        document.querySelector("footer > button.clear-completed").click();
    }
};

let allFunctions = [];
for (let prop in myToDo) {
    if (typeof myToDo[prop] == 'function') {
        allFunctions.push(prop);
    }
}

setInterval(function() {
    myToDo[allFunctions[Math.floor(Math.random() * allFunctions.length)]]();
}, 800);
