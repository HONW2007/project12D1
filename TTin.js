const members = [
    { name: 'Nguyễn Văn A', avatar: 'https://via.placeholder.com/150', description: 'Lớp trưởng, rất năng động' },
    { name: 'Trần Thị B', avatar: 'https://via.placeholder.com/150', description: 'Giỏi toán, chăm chỉ' },
    { name: 'Lê Thị C', avatar: 'https://via.placeholder.com/150', description: 'Thích hát, luôn vui vẻ' },

];

const membersList = document.getElementById('members-list');

function displayMembers() {
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        
        memberDiv.innerHTML = `
            <img src="${member.avatar}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;
        
        membersList.appendChild(memberDiv);
}

displayMembers();
