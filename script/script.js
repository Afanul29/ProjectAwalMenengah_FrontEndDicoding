// Data dummy
const notesData = [
  {
    id: "notes-jT-jjsyz61J8XKiI",
    title: "Welcome to Notes, Dimas!",
    body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
    createdAt: "2022-07-28T10:03:12.594Z",
    archived: false,
  },
  {
    id: "notes-aB-cdefg12345",
    title: "Meeting Agenda",
    body: "Discuss project updates and assign tasks for the upcoming week.",
    createdAt: "2022-08-05T15:30:00.000Z",
    archived: false,
  },
  {
    id: "notes-XyZ-789012345",
    title: "Shopping List",
    body: "Milk, eggs, bread, fruits, and vegetables.",
    createdAt: "2022-08-10T08:45:23.120Z",
    archived: false,
  },
  {
    id: "notes-1a-2b3c4d5e6f",
    title: "Personal Goals",
    body: "Read two books per month, exercise three times a week, learn a new language.",
    createdAt: "2022-08-15T18:12:55.789Z",
    archived: false,
  },
  {
    id: "notes-LMN-456789",
    title: "Recipe: Spaghetti Bolognese",
    body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
    createdAt: "2022-08-20T12:30:40.200Z",
    archived: false,
  },
  {
    id: "notes-QwErTyUiOp",
    title: "Workout Routine",
    body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
    createdAt: "2022-08-25T09:15:17.890Z",
    archived: false,
  },
  {
    id: "notes-abcdef-987654",
    title: "Book Recommendations",
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: "2022-09-01T14:20:05.321Z",
    archived: false,
  },
  {
    id: "notes-zyxwv-54321",
    title: "Daily Reflections",
    body: "Write down three positive things that happened today and one thing to improve tomorrow.",
    createdAt: "2022-09-07T20:40:30.150Z",
    archived: false,
  },
  {
    id: "notes-poiuyt-987654",
    title: "Travel Bucket List",
    body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
    createdAt: "2022-09-15T11:55:44.678Z",
    archived: false,
  },
  {
    id: "notes-asdfgh-123456",
    title: "Coding Projects",
    body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
    createdAt: "2022-09-20T17:10:12.987Z",
    archived: false,
  },
  {
    id: "notes-5678-abcd-efgh",
    title: "Project Deadline",
    body: "Complete project tasks by the deadline on October 1st.",
    createdAt: "2022-09-28T14:00:00.000Z",
    archived: false,
  },
  {
    id: "notes-9876-wxyz-1234",
    title: "Health Checkup",
    body: "Schedule a routine health checkup with the doctor.",
    createdAt: "2022-10-05T09:30:45.600Z",
    archived: false,
  },
  {
    id: "notes-qwerty-8765-4321",
    title: "Financial Goals",
    body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
    createdAt: "2022-10-12T12:15:30.890Z",
    archived: false,
  },
  {
    id: "notes-98765-54321-12345",
    title: "Holiday Plans",
    body: "Research and plan for the upcoming holiday destination.",
    createdAt: "2022-10-20T16:45:00.000Z",
    archived: false,
  },
  {
    id: "notes-1234-abcd-5678",
    title: "Language Learning",
    body: "Practice Spanish vocabulary for 30 minutes every day.",
    createdAt: "2022-10-28T08:00:20.120Z",
    archived: false,
  },
];

console.log(notesData);

// Komponen Custom untuk Item Catatan
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const body = this.getAttribute("body");

    this.shadowRoot.innerHTML = `
      <style>
        .item-catatan {
          padding: 1em;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .item-catatan:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h3 {
          margin: 0;
          font-size: 1.2em;
          color: #333;
        }
        p {
          font-size: 1em;
          color: #666;
        }
      </style>
      <div class="item-catatan">
        <h3>${title}</h3>
        <p>${body}</p>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);

// Komponen Custom untuk Form Catatan
class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          padding: 1em;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        label {
          margin-bottom: 0.5em;
          font-weight: bold;
        }
        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5em;
          margin-bottom: 1em;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1em;
          box-sizing: border-box;
        }
        button[type="submit"] {
          padding: 0.75em;
          font-size: 1em;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button[type="submit"]:hover {
          background-color: #0056b3;
        }
      </style>
      <form id="form-catatan">
        <label for="judul-catatan">Judul:</label>
        <input type="text" id="judul-catatan" required />
        <label for="isi-catatan">Isi:</label>
        <textarea id="isi-catatan" rows="4" required></textarea>
        <button type="submit">Tambah</button>
      </form>
    `;

    this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('note-submitted', {
        detail: {
          title: this.shadowRoot.querySelector('#judul-catatan').value,
          body: this.shadowRoot.querySelector('#isi-catatan').value,
        },
        bubbles: true,
        composed: true,
      }));
      this.shadowRoot.querySelector('form').reset();
    });
  }
}

customElements.define('note-form', NoteForm);

// Komponen Custom untuk Header Aplikasi
class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
          padding: 1em;
          background-color: #007bff;
          color: #fff;
          text-align: center;
          border-radius: 8px;
        }
        h1 {
          margin: 0;
          font-size: 2em;
        }
      </style>
      <header>
        <h1>Aplikasi Catatan</h1>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);

// Fungsi untuk menampilkan catatan
function tampilkanCatatan(catatan) {
  const daftarCatatan = document.getElementById("daftar-catatan");
  daftarCatatan.innerHTML = "";
  catatan.forEach((cat) => {
    const itemCatatan = document.createElement('note-item');
    itemCatatan.setAttribute('title', cat.title);
    itemCatatan.setAttribute('body', cat.body);
    daftarCatatan.appendChild(itemCatatan);
  });
}

// Menampilkan catatan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  tampilkanCatatan(notesData);

  // Menangani submit form
  document.querySelector('note-form').addEventListener('note-submitted', (event) => {
    const catetanBaru = {
      id: "notes-" + Date.now(),
      title: event.detail.title,
      body: event.detail.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    notesData.push(catetanBaru);
    tampilkanCatatan(notesData);
  });
});
