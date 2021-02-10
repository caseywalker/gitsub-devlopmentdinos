
// *** Data Types *** //
const users = [ 
  {
    userName: 'Dino Dinosaurus',
    repos: [
      {
      repoName: 'Repo 1',
      repoDescription: 'Repo Description',
      repoTags: ['Tag 1', 'Tag 2', 'Tag 3'],
      isPinned: true
    },
    {
      repoName: 'Repo 2',
      repoDescription: '2nd Description',
      repoTags: ['Tag Button 1', 'Tag Button 2'],
      isPinned: true
    },
    {
      repoName: 'Repo 3',
      repoDescription: '3rd descript',
      repoTags: ['Tag 1', 'Tag 2'],
      isPinned: false
    },
    {
      repoName: 'Repo 4',
      repoDescription: '4th descript',
      repoTags: ['Tag 1', 'Tag 2'],
      isPinned: false
    },
  ],
    projects: [
      {
        projectName: 'Project 1',
        projectDescription: 'Description 1'
      }, 
      {
        projectName: 'Project 2',
        projectDescription: 'Description 2'
      }, 
      {
        projectName: 'Project 3',
        projectDescription: 'Description 3'
      }, 
      {
        projectName: 'Project 4',
        projectDescription: 'Description 4'
      }, 
    ],
    packages: [
      {
        packageName: 'Package 1',
        packageDescription: 'Description 1'
      },
      {
        packageName: 'Package 2',
        packageDescription: 'Description 2'
      },
      {
        packageName: 'Package 3',
        packageDescription: 'Description 3'
      },
      {
        packageName: 'Package 4',
        packageDescription: 'Description 4'
      },
    ]
  },
]

// *** DOM Printer *** //
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

// *** HTML Builder Functions *** //

// Function to build list of pinned repositories and print to DOM
const pinnedRepoBuilder = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += ` <div class="card pinned-repo-card mt-4">
                      <div class="card-header">Repo Name</div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus quae fugit, perferendis dignissimos repudiandae consequuntur soluta similique expedita excepturi molestiae eaque adipisci, fuga sapiente facere doloremque eius laudantium maiores.</p>
                         <button type="button" class="btn btn-secondary">Repo Tag</button>
                      </div>
                    </div>
                          `;
  });
  printToDom('#pinnedRepos', domString);
};
// ********** END **********

// Function to add pinned repos

const getPinnedRepoFormInfo = (e) => {
  e.preventDefault();
  
  const form = document.querySelector('#pinnedReposForm');
  const name = document.querySelector('#pinnedRepoName').value;
  const description = document.querySelector('#pinnedReposDescription').value;
  const pinned = true;

  const obj = {
    name,
    description,
    pinned,
  };

  users.push(obj);

  pinnedRepoBuilder(users.repos);

  form.reset();
};

// ***  Event Handlers *** //


// *** Event Listeners *** //


// *** Initializers *** //
const init = () => {

}

init();
