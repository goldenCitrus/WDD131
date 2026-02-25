
const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro. T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis. A'}
    ],
    deenrollStudent: function(sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
          this.sections[sectionIndex].enrolled--;
          renderSections(this.sections);
        }
      },
    enrollStudent: function(sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#addCourse").addEventListener("click", function () {
  let addSection = {
      sectionNum: aCourse.sections.length + 1,
      roomNum: `STC ${Math.floor(Math.random() * 300) + 100}`,
      enrolled: 0,
      days: ['MWF', 'TTh'][Math.floor(Math.random() * 2)],
      instructor: ['YOU!', 'TBD', 'Bro. Keers', 'Bro. T', 'Sis. A', 'Bro Kay', 'Albert Einstein', 'Pres. Dallin H Oaks', 'The Merediths'][Math.floor(Math.random() * 9)]
  }
    aCourse.sections.push(addSection)
    renderSections(aCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.deenrollStudent(sectionNum);
});

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

setInterval(autoenroll, Math.floor(Math.random() * 4000) + 1000);

function autoenroll() {
  aCourse.enrollStudent(Math.floor(Math.random() * aCourse.sections.length));
}

setInterval(autoderoll, Math.floor(Math.random() * 9000) + 1000);

function autoderoll() {
  aCourse.deenrollStudent(Math.floor(Math.random() * aCourse.sections.length));
}