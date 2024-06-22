---
sidebar_position: 5
---

# Entra ID (Azure AD) SAML

<Subtitle>Step-by-step guide to configure Single Sign-on with Microsoft Entra ID as the Identity Provider. </Subtitle>

### 1. Download Metadata XML

Sign into the SSO Configuration Portal, select **Microsoft Entra ID,** then **SAML,** and click on **Configure.**

Under **Service Provider Details,** click on **Download Metadata XML**.

<figure>![Download Metadata XML](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled.png)
<figcaption>Download Metadata XML</figcaption></figure>

### 2. Create Enterprise Application

Login to **Microsoft Entra ID** in the [Microsoft Azure Portal](https://portal.azure.com/). Select the option for **Entra ID application** and locate the **Enterprise Applications** tab.

<figure>![Locate Enterprise applications](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%201.png)
<figcaption>Locate Enterprise applications</figcaption></figure>

In the **Enterprise Applications** tab **New Application** in the top navigation bar.

<figure>![Click on New application](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%202.png)
<figcaption>Click on New application</figcaption></figure>

Click on **Create your own Application** and give your application a name.

Select the ***Integrate any other application you don’t find in the gallery (Non-gallery)*** option. Click on **Create**.

<figure>![Create a new application on Entra ID](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/download_(3).gif)
<figcaption>Create a new application on Entra ID</figcaption></figure>

### 3. SAML Configuration

Locate the **Single Sign-on** option under **Manage,** and choose **SAML**.

<figure>![Locate SAML under Single sign-on](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%203.png)
<figcaption>Locate SAML under Single sign-on</figcaption></figure>

Click on **Upload metadata file**. Upload the **Metadata XML file** downloaded in step 1.

<figure>![Click on Upload metadata file](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%204.png)
<figcaption>Click on Upload metadata file</figcaption></figure>

Click on **Save.**
<figure>![Save button](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%205.png)
<figcaption>Save button</figcaption></figure>

### 4. Attribute Mapping

Under **Attributes & Claims**, click on **Edit.**
<figure>![Click on Edit ](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%206.png)
<figcaption>Click on Edit </figcaption></figure>

Check the **Attribute Mapping** section in the **SSO Configuration Portal**, and carefully map the same attributes on your **Entra ID** app.
<figure>![**SSO Configuration Portal**](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%207.png)
<figcaption>SSO Configuration Portal</figcaption></figure>

<figure>![**Microsoft Entra ID**](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%208.png)
<figcaption>Microsoft Entra ID</figcaption></figure>

### 5. Assign User/Group

Go to the **Users and groups** tab, and click on **Add user/group**.

Here, please select all the required users or user groups that need login access to this application via Single Sign-On.
<figure>![Assigning users and groups to your application](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/download_(2).gif)
<figcaption>Assigning users and groups to your application</figcaption></figure>

### 6. Upload IdP Metadata URL

Under **SAML Certification**, copy the link under **App Federation Metadata URL on Entra ID**

<figure>![Copy App Federation Metadata URL](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%209.png)
<figcaption>Copy App Federation Metadata URL</figcaption></figure>

Under **Identify Provider Configuration,** select **Configure using Metadata URL,** and paste it under **App Federation Metadata URL** on the **SSO Configuration Portal.**

<figure>![Paste App Federation Metadata URL](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%2010.png)
<figcaption>Paste App Federation Metadata URL</figcaption></figure>

### 7. Test Connection

Click on **Test Connection.** If everything is done correctly, you will see a **Success** response as shown below.

If the connection fails, you’ll see an error, the reason for the error, and a way to solve that error right on the screen.  

<figure>![Test your SAML application for SSO](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%2011.png)
<figcaption>Test your SAML application for SSO</figcaption></figure>

### 8. Enable connection

Click on **Enable Connection.** This will let all your selected users login to the new application via your Microsoft Entra ID SSO.

<figure>![Enable SSO on Entra ID](Azure%20AD%20-%20SAML%20f014d32b2c774ac898de9026e3141e01/Untitled%2012.png)
<figcaption>Enable SSO on Entra ID</figcaption></figure>

With this, we are done configuring your Microsoft Entra ID application for an SSO login setup.
