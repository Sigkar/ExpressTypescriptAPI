<h1 align="center">Basic Typescript API</h1>


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

I personally recommend using Homebrew to install several of these dependencies. Brew is available on Linux, Mac, and is available in the Ubuntu Virtual Machine on Windows. 

https://brew.sh

### Prerequisites

#### Requirements to run this API
1. Install NodeJS
  - [Node](https://nodejs.org/en/download/) - Web Download
  - Homebrew: ```brew install node```
2. Verify NPM and Node have been installed
  - ```node -v```
  - ```npm -v```


#### Learning Resources
* [MySQL Reference](https://www.a2hosting.com/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line)
  - Create a user, database, and run database migrations.
  - Migrations can be run in step 4.
* [NodeJS Reference](https://nodejs.org/en/docs/)
* [NPM Reference](https://docs.npmjs.com/)
* [Express Reference](https://expressjs.com/en/api.html)

### Installing

#### To Install:

**Command Line:**


1. Clone this repository
  - ```git clone <respoitory> <folder destination (optional)>```
2. In the Installation Folder:
  - ```npm install```
    - *If any issues arise in Dependencies:*
      - ```npm audit fix```
3. Once the dependencies are installed, in the installation folder:
  - ```touch .env```
#### Example .env file for Headlinerr API:
```
DB_HOST=<your database host>
DB_USER=<your user>
DB_PASS=<your password>
DB_NAME=<your database name>
```

4. Migrate the databases:
  - Run ```db-migrate --config config/database.json -e prod```

#### Lets run this thing:
5. In the base directory for the repository:
  - To build typescript into javascript for production:
    - ```npm run build```
  - To run the current production API:
    - ```npm run prod```
  - To build and run production api:
    - ```npm run bmf```
  - See package.json for more script information
  


## Deployment



#### To deploy: (Unavailable)
1. The deployment system is available via Bash Shell. Simply run:
  - ```bash deploy_to_development.sh```
  - ```bash deploy_to_master.sh```


## Roadmap

#### Planned Features


#### Monetization

## Authors
|Commit Ranking|Author|Role|Git Link|
|-|-|-|-|
|1|**Duncan Pierce**| *Founder*|[Sigkar](https://github.com/Sigkar)|
## Built With

* [NodeJS / NPM](https://nodejs.org/en/) - The web framework used






