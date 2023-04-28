# FutureForms featured demo and tutorial installation

This Ansible script will install FutureForms with the extended demo.
This demo will show what a lot of the classes in FutureForms can do.

## Requirements

This script will install a lot of TypeScript package
so it is recommended to run the script in a Ubuntu
server running on a virtual machine (VirtualBox, LXC, VmWare, WSL).
This will make a cleanup easier.

In Ubuntu these packages and their dependencies will be installed:

* Java
* PostgreSQL
* npm
* node-typescript
* unzip

Make the installation easier by not requiring password all the time
add `NOPASSWD:` to the group `%sudo`.
Run the command `visudo`:

```
sudo visudo
```

Change the line with `%sudo` to:

```
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

## Install

Start Ubuntu and install Ansible and Git yourself:

```
sudo apt install ansible git
```

Clone this repository in your working directory:

```
git clone https://github.com/peter-gram/ff-install
cd ff-install
``` 

Now you are ready to install 
[FutureForms Featured Demo](playbooks/demo/)
with the ansible script.

If you want to develop yourself you should start from the tutorial list:

* [hello1](playbooks/hello1) Anonymous login
* [hello2](playbooks/hello2) Username login
* [hello3](playbooks/hello3) One table
* [hello4](playbooks/hello4) Sort column
* [hello5](playbooks/hello5) Join two tables - master/detail
