let array = [
  [
    {
      id: 15560,
      firstName: "Վարդան",
      lastName: "Սարգսյան",
      age: 15,
      entryDate: "2020-01-02",
      oneDaySalary: 36,
    },
  ],
  [
    {
      id: 15561,
      firstName: "Սուրիկ",
      lastName: "Գինոսյան",
      age: 17,
      entryDate: "2020-03-02",
      oneDaySalary: 157,
    },
  ],
  [
    {
      id: 15562,
      firstName: "Աննա",
      lastName: "Կիրակոսյան",
      age: 16,
      entryDate: "2020-03-15",
      oneDaySalary: 590,
    },
  ],
  [
    {
      id: 15563,
      firstName: "Սիմոնա",
      lastName: "Գալստյան",
      age: 20,
      entryDate: "2020-11-10",
      oneDaySalary: 600,
    },
  ],
  [
    {
      id: 15564,
      firstName: "Գագիկ",
      lastName: "Ծատուրյան",
      age: 21,
      entryDate: "2020-09-10",
      oneDaySalary: 750,
    },
    {
      id: 15564,
      firstName: "Գագիկ",
      lastName: "Ծատուրյան",
      age: 21,
      entryDate: "2020-09-10",
      oneDaySalary: 750,
    },
  ],
];

function task(array) {
  let buttonDuration = document.createElement("button");
  let buttonSalary = document.createElement("button");
  let table = document.createElement("table");
  let trone = document.createElement("tr")
  let count = true,num = 0,countSalary=true,numSalary=0,arr = [];
      Object.keys(array[0][0]).forEach((key)=>{
        let th = document.createElement("th")
        th.innerHTML = key
        trone.appendChild(th)
        table.appendChild(trone);
      })
     
      for(let i = 0;i<array.length;i++){
        let trtwo = document.createElement("tr")

      Object.values(array[i][0]).forEach((value)=>{
          let td = document.createElement("td");
          td.innerHTML = value;
          trtwo.appendChild(td)
          table.appendChild(trtwo)
        })


        buttonDuration.addEventListener("click", () => {
            let begin = new Date((array[i][0].entryDate));
            let end = new Date("2021-02-03");
              let result = -1;
              let currentDate = begin;
              while (currentDate <= end) {
                  let weekDay = currentDate.getDay();
                  if ( weekDay != 7)
                      result++;;
                  currentDate.setDate(currentDate.getDate() + 1);
              }
              if (count) {
                  let th = document.createElement("th");
                  th.innerHTML = "Duration"
                  trone.appendChild(th)
                  count = false
              }
              if (num < 5) {
                  for (let i = 0; i < 1; i++) {
                      let td = document.createElement("td");
                      td.innerText = result
                      trtwo.appendChild(td)
                      num++;
                      arr.push(result)
                  }
              }
  
          buttonSalary.addEventListener("click", () => {
            if (countSalary) {
                let th = document.createElement("th");
                th.innerHTML = "Salary"
                trone.appendChild(th)
                countSalary = false
            }
          
            let childTr = table.children;
            if (numSalary < 5) {
                for (let i = 0; i < arr.length; i++) {
                    let td = document.createElement("td");
                    td.innerText = arr[i] * array[i][0].oneDaySalary
                    childTr[i+1].appendChild(td)
                    numSalary++
    
                }
            }
        }) 
  
      })
      }
  document.body.appendChild(table);
  buttonDuration.innerHTML = "Duration";
  document.body.appendChild(buttonDuration);
  buttonSalary.innerHTML = "Salary";
  document.body.appendChild(buttonSalary);
}

task(array);
