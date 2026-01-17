async function timeTrackingData() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("Can't Fetch Data!");
    } else {
      const data = await response.json();
      const timeFrameData = await data.map((e) => {
        return e;
      });
      // getting elements fro, the DOM
      let periodsBtn = document.querySelectorAll(".period");
      let containerElement = document.querySelectorAll(".container");
      let titleElement = document.querySelectorAll(".title");
      let ellipsisElement = document.querySelectorAll(".ellipsis");

      // adding context to title element
      for (let i = 0; i < titleElement.length; i++) {
        for (let i = 0; i < timeFrameData.length; i++) {
          let title = timeFrameData[i].title;
          titleElement[i].textContent = title;
        }
        periodsBtn.forEach((btn) => {
          btn.addEventListener("click", function () {
            // remove active
            periodsBtn.forEach((ele) => ele.classList.remove("active"));
            // add active
            btn.classList.add("active");
            // working on the daily period
            if (btn.textContent.toLowerCase() === "daily") {
              containerElement.forEach((container, index) => {
                container.addEventListener("click", () => {
                  currentElement = container.querySelector(".current");
                  previousElement = container.querySelector(".previous");
                  const dailyData = timeFrameData[index].timeframes.daily;
                  currentElement.textContent = `${dailyData.current}hrs`;
                  previousElement.textContent = `Last Week - ${dailyData.previous}hrs`;
                });
              });
            }

            // working on the weekly period
            if (btn.textContent.toLowerCase() === "weekly") {
              containerElement.forEach((container, index) => {
                container.addEventListener("click", () => {
                  currentElement = container.querySelector(".current");
                  previousElement = container.querySelector(".previous");
                  const weeklyData = timeFrameData[index].timeframes.weekly;
                  currentElement.textContent = `${weeklyData.current}hrs`;
                  previousElement.textContent = `Last Week - ${weeklyData.previous}hrs`;
                });
              });
            }
            // working on the monthly period
            if (btn.textContent.toLowerCase() === "monthly") {
              containerElement.forEach((container, index) => {
                container.addEventListener("click", () => {
                  currentElement = container.querySelector(".current");
                  previousElement = container.querySelector(".previous");
                  const monthlyData = timeFrameData[index].timeframes.monthly;
                  currentElement.textContent = `${monthlyData.current}hrs`;
                  previousElement.textContent = `Last Week - ${monthlyData.previous}hrs`;
                });
              });
            }
          });
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
timeTrackingData();
