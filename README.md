# FutureForms featured demo installation

This Ansible script will install FutureForms with the extended demo.
This demo will show what a lot of the classes in FutureForms can do.

## Requirements

This script will install a lot of TypeScript package
so it is recommended to run the script in a Ubuntu
server running on a virtual machin (VirtualBox, LXC, VmWare, WSL).
This will make a cleanup easier.

In Ubuntu these packages will be installed:

* Git
* Java
* PostgreSQL
* npm
* node-typescript
* unzip

## Install

Start Ubuntu and install Ansible yourself:

```
sudo apt install ansible
```

Now you are ready to install 
[FutureForms Featured Demo](playbooks/demo/)
with the ansible script.

If you want to develop yourself you should start from the list:

* [hello1](playbooks/hello1) The simplest demo of FutureForms
* hello2 To be made
