---
layout: post
title: Install Apache on Linux
date: 2019-09-10 17:21 +0300
tags: [linux, PHP, Laravel]
---

## What is apache webserver?
According to [wpbeginner], Apache is the most widely used web server software. Developed and maintained by Apache Software Foundation, Apache is an open source software available for free. It runs on 67% of all webservers in the world. It is fast, reliable, and secure. It can be highly customized to meet the needs of many different environments by using extensions and modules. Most WordPress hosting providers use Apache as their web server software. However, WordPress can run on other web server software as well.

### Step 1: Update System Repos
{% highlight bash %}
sudo apt update

{%endhighlight%}
### Step 2: Install Apache with apt command
{% highlight bash %}
sudo apt install apache2
{%endhighlight%}

### Verify the Installation
{% highlight bash %}
apache2 -version
#Sample output from cli
Server version: Apache/2.4.29 (Ubuntu)

{%endhighlight%}

## Other Steps
Depending on how your system is setup, you might need to add to configure firewall settings for apache. Otherwise you are good to go for now.




[wpbeginner]:https://www.wpbeginner.com/glossary/apache/