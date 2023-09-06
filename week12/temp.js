const URL_ENDPOINT = "http://localhost:3000/studentRoster"

$.get(URL_ENDPOINT).then(data => {
    data.map(student => {
        $('tbody').append(
            $(`
        <tr>
          <td>${student.id}</td>
          <td>${student.fullName}</td>
          <td>${student.researchAssignment}</td>
          <td>
            <button onclick="deleteUser(${student.id})">🗑</button>
          </td>
        </tr>
      `)
        )
    })
})

$('#submitStudent').click(function () {

    $.post(URL_ENDPOINT, {
        fullName: $('#fullName').val(),
        researchAssignment: $('#newAssignment').val(),
    })
})

function deleteUser(id) {

    $.ajax(`${URL_ENDPOINT}/${id}`, {
        type: 'DELETE'
    });
}

function updateStudent() {
    let id = $('#updateId').val();

    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'PUT',
        data: {
            fullName: $('#updateFullName').val(),
            assignment: $('#updateAssignment').val(),
        }
    });
}

$('#updateStudent').click(updateStudent)