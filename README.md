## WhatsApp Business API (WBA)
This repository investigates the [WhatsApp Business API](https://www.whatsapp.com/business/api) (usage and capabilities) and some of the WhatsApp authorized third party vendors (sandboxes) 

## WhatsApp Business API (WBA) Key Concepts
- In order to partner up with WhatsApp and use WBA, a submission of the business profile needs to be done [ here](https://www.facebook.com/business/m/whatsapp/business-api). Also, a [business manager account](https://business.facebook.com/) is required.

- User opt-ins are required to start recieving messages from WBA ([more information](https://developers.facebook.com/docs/whatsapp/guides/opt-in))

- Catalog feature support present in WhatsApp Business but there's no API reference present in the [WBA reference guide](https://developers.facebook.com/docs/whatsapp/api/reference). Although, its listed under **conversational commerce** in the [Catalog batch API](https://developers.facebook.com/docs/commerce-platform/catalog/batch-api) is present under [marketing API](https://developers.facebook.com/docs/marketing-api/catalog). I've posted [a question in the FB Developer Forum](https://developers.facebook.com/community/threads/169810994424157/?post_id=169810997757490) to track this. 

- Doesn't have any **out-of-the-box support** for [language translation](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations). 

- Messages from WBA can be classified into two types:
    - Session based messages - If the responses are sent within 24hrs, its called session messages. Session messages include - [Text Messages](https://developers.facebook.com/docs/whatsapp/api/messages/text), [Media Messages](https://developers.facebook.com/docs/whatsapp/api/messages/media), [Group Messages](https://developers.facebook.com/docs/whatsapp/api/messages/group) and some type of messages as well like [contact and location messages](https://developers.facebook.com/docs/whatsapp/api/messages/others). There's no limit to the number of session messages that can be sent. The pricing model for session messages vary from partner to partner. [Twilio's WhatsApp API Pricing](https://www.twilio.com/whatsapp/pricing/in)

    - Template based messages - If the reply by WBA to the 
client is sent after 24hrs, the message needs to be of the type [template messages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates). A template message can be either of the type [Media template message](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/media-message-templates) or [Interactive template Message](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/interactive-message-templates).The pricing model for template messages also vary from partner to partner. [Twilio's WhatsApp API Pricing](https://www.twilio.com/whatsapp/pricing/in). A message template needs to be pre-approved. However, it's possible to edit/add template messages. Check out the [template message guidelines](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines#tips) for more information on this.


    All template messages are required to be preconfigured and created using the `Business Manager`. [More Information about this](https://www.facebook.com/business/help/2055875911147364?id=2129163877102343)

    Message templates have [localization support](https://developers.facebook.com/docs/whatsapp/message-templates/localization) as well
    
- **No out of the box** support for NLP/chatbots by WhatsApp. ([Some more information about this](https://chatbotslife.com/overview-of-the-whatsapp-business-api-and-how-to-leverage-it-1477029c0be0))

- [Official WhatsApp Business API pricing schedule](https://developers.facebook.com/docs/whatsapp/pricing/) (check for India)
- [A Pricing comparison between various WhatsApp partners by Respomd.io](https://respond.io/blog/how-to-choose-a-whatsapp-partner-whatsapp-business-api-pricing/) 

- [WhatsApp Business API FAQ](https://developers.facebook.com/docs/whatsapp/faq/)

## WhatsApp Business API (WBA) AWS Setup

- Guide - [Deploying with Amazon Web Services](https://developers.facebook.com/docs/whatsapp/aws)
- Cloudformation templates - [Network stack](https://developers.facebook.com/docs/whatsapp/aws#network-setup) and [WBA stack](https://developers.facebook.com/docs/whatsapp/aws#whatsapp-setup)(comprises of the Coreapp and the Webapp)
    - Coreapp -
        > A Coreapp node is responsible for handling messaging traffic to and from WhatsApp. 
    - Webapp - 
        > A Webapp node is responsible for handling API traffic like the original Webapp container.
    There could be multiple Webapp nodes and Coreapp nodes. [More information about the HA architecture](https://developers.facebook.com/docs/whatsapp/high-availability/)

- The parameters I've tried during the setup (removed or obfuscated all sensitive information)

For networking stack (some are default parameters as well)
```
AZs	us-east-1a,us-east-1b,us-east-1c	-
CreatePrivateSubnets	true	-
NumAZs	2	-
PrivateSubnet1Cidr	10.0.0.0/19	-
PrivateSubnet2Cidr	10.0.32.0/19	-
PrivateSubnet3Cidr	10.0.64.0/19	-
PrivateSubnet4Cidr	10.0.96.0/19	-
PublicSubnet1Cidr	10.0.128.0/20	-
PublicSubnet2Cidr	10.0.144.0/20	-
PublicSubnet3Cidr	10.0.160.0/20	-
PublicSubnet4Cidr	10.0.176.0/20	-
VPCCidr	10.0.0.0/16	-
VPCTenancy	default	-
```
For WA enterprise stack (some are default parameters as well)
```
ConfigOnDB	true	-
ContainerLogDriver	awslogs	- // This will stream all container logs to CloudWatch
ContainerLogMaxFiles	7	-
ContainerLogMaxSize	50	-
CryptoKeyForRestData	Default-Key	-
DBConnCA	https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem	-
DBConnCert	-	-
DBConnKey	-	-
DBEngineVersion	5.7.26	-
DBHostname	-	-
DBIOPS	1000	-
DBIdleConnectionTimeoutMS	180000	-
DBInstanceClass	db.m4.large	-
DBMultiAZEnabled	enabled	-
DBPassword	****	-
DBPort	3306	-
DBStorageCapacity	50	-
DBStorageType	gp2	-
DBUser	****	-
EBSVolumeSize	16	-
EFSId	-	-
EncryptDBConn	enabled	-
EnvType	production	-
HAEnabled	disabled	-
InstanceType	m4.large	-
KeyName	whatsapp-api	-
LBScheme	internet-facing	-
LBSubnets	<<Public Subnets>>	-
LogRetentionDays	3	-
NumCoreappInstances	2	-
PersistDBConn	enabled	-
SubnetCount	2	-
SubnetIDs	<<Private subnets>>	-
UserCryptoKeyId	-	-
VpcId	<<VPC ID>>	-
WAEntContRegistry	docker.whatsapp.biz	-
WAEntContTag	v2.27.12
```
- Known issues:
    - The test API provided in the AWS guide is https://load-balancer-hostname-or-ip/api/control.php".   `control.php`, in this case, isn't a valid resource and it throws an error (This issue can be fixed in future versions as well). However, the setup's correctness can be observed because the API call returns the correct version (in this case `v2.27.12`)
    ```
    curl -d payload.json https://waEnt-lb-full-name.elb.amazonaws.com/api/control.php -k
    ```
    A sample `payload.json` is also checked in to the source code(values obfuscated).
    
- Check this for [in-house deployment using Kubernetes](https://developers.facebook.com/docs/whatsapp/installation)

## WhatsApp Business API Sandbox accounts (Partner sandbox)
- [MessageBird Sandbox Account](https://support.messagebird.com/hc/en-us/articles/360002109957-Getting-Started-with-the-MessageBird-WhatsApp-Sandbox) - Follow the steps to setup the sandbox account.
    - `messengerBird` folder consists of the scripts to run a few pre-configured templated messages. Replace the `accessKey` and other authorization details. Run the  pre-configured `template messages`  :
        - Run `npm install -g messagebird` and then run the following:
            - `node support.js`
            - `node verification.js`
            - `node notifications.js`
    - `messengerBird` folder consists of some of the API calls for `webhooks` as well. The Webhook used is from [Webhook.site](https://webhook.site/). Feel free to use my `simple_server_webhook.js` (runs on http://localhost:8080) as well.
        - `node create-webhook.js` (Send a text to confirm whether the webhook is fired or not)
        - `node list-webhooks.js`
        - `node read-webhook.js`
        - `node delete-webhook.js`

    - The response object formats can be compared with the [actual response object formats](https://developers.facebook.com/docs/whatsapp/api/webhooks/inbound) from WhatsApp Business API. In-line comments are added to these files for ease of use.

- [Twilio Sandbox Account](https://www.twilio.com/docs/whatsapp/api#twilio-sandbox-for-whatsapp) - Follow the steps to setup the sandbox account.
    - In `twilio` folder, run `npm install -g twilio`
    - Run `node send_message.js` to send a sample text.
    - Rest is similar to `messagebird` apart from the API naming conventions.
