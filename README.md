# Content Collaborator
This is a realtime content editor which allows a group of users to
Collaborate on documents or webpage contents, see changes in realtime,
make changes as they go and upload the content in no time.

## To start the project
Run mongodb locally using the following command

```bash
sudo docker run -d -p 27017:27017 -v "${pwd}"/data:/data/db mongo
```

#### Then to start the backend
- cd backend
- npm i
- npm start

#### To start the frontend

Make sure you have angular cli installed globally in your system.
To install angular cli run the following command.

```bash
    $ sudo npm i -g @angular/cli@8.3.25
```

- cd frontend
- ng serve

If you want to run the frontend for the production,
perform the following steps.
- Install lite-server globally
```bash
    $ sudo npm i -g lite-server
```
- Build the angular project
```bash
    # From the root of the project, run:
    $ cd ./frontend && ng build --prod
```
- Change directory into the root dist folder and run the index.html file using lite-server

```bash
    $ cd ./frontend/dist/content-pusher
    $ lite-server index.html
```

## Screenshots of the project

After the initial login/registration
You will see the editor. All the people 
connected to the server who are logged in can see the editor,
make changes in the document, see the changes in realtime
and then, can push the html created from the editor into the databse.

![The editor](https://raw.githubusercontent.com/MohakChugh/Content-Collaborator/master/ui/assets/img/editor.png)

On clicking the button down in the right corner,
You can see the html content on
`localhost:4200/blogs`

The blogs page will look something like this:
![The Blog Page](https://raw.githubusercontent.com/MohakChugh/Content-Collaborator/master/ui/assets/img/blog.png)

#### How real time Collaboration works on this
When all the people who are logged in and are on the page
`localhost:4200/editor`, they are instantly connected to the server
and can make changes to the document as they proceed.

![Real Time Collaboration](https://raw.githubusercontent.com/MohakChugh/Content-Collaborator/master/ui/assets/img/text-editor.gif)