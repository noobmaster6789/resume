const apiUrl = "http://localhost:5000/api/users"; // Thay bằng URL API thực

function renderTable(data) {
    const tbody = $("#userTable tbody");
    tbody.empty();

    if (data.length === 0) {
        tbody.append("<tr><td colspan='3' class='text-center'>Không có dữ liệu</td></tr>");
        return;
    }

    data.forEach(user => {
        const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn btn-sm btn-danger deleteBtn" data-id="${user.id}" data-bs-toggle="modal" data-bs-target="#deleteModal">Xoá</button>
        </td>
      </tr>
    `;
        tbody.append(row);
    });
}

function loadUsers() {
    $.get(apiUrl, function (data) {
        renderTable(data);
    });
}

$("#userForm").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();

    if (!name || !email) {
        $("#error").text("Vui lòng nhập đầy đủ họ tên và email.");
        return;
    }

    $.ajax({
        url: apiUrl,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ name, email }),
        success: function () {
            $("#name").val("");
            $("#email").val("");
            $("#error").text("");
            loadUsers();
        }
    });
});

let deleteId = null;
$(document).on("click", ".deleteBtn", function () {
    deleteId = $(this).data("id");
});

$("#confirmDelete").click(function () {
    if (deleteId) {
        $.ajax({
            url: `${apiUrl}/${deleteId}`,
            type: "DELETE",
            success: function () {
                loadUsers();
                deleteId = null;
                const modal = bootstrap.Modal.getInstance($("#deleteModal")[0]);
                modal.hide();
            }
        });
    }
});

$("#search").on("input", function () {
    const keyword = $(this).val().toLowerCase();
    $.get(apiUrl, function (data) {
        const filtered = data.filter(user => user.name.toLowerCase().includes(keyword));
        renderTable(filtered);
    });
});

$(document).ready(() => {
    loadUsers();
});
