# RemoteTapPoc

## What's this about?

This project demos a few things I learned while experimenting with Unreal Engine.
* Unreal Engine plugin
* Creating buttons via Blueprint
* Socket.io communication between Unreal Android client and NodeJS server
* Simulating Android click/tap remotely in Unreal client

Credit to this [article](https://isaratech.com/ue4-making-a-android-plugin-in-10-minutes/) that helped me understand how to integrate into Android SDK via UE plugin.

The Unreal Engine project can be packaged into an APK which has been tested on a Samsung Galaxy s10.

The NodeJS project for server is inside TestSocket-Server-2.0.0.

There are two buttons on the app screen. The `Manual Click` button will simulate a tap at location defined by the top x/y values while the `Remote Click` button increments the `Counter` value above for every click on it.

A `tap` command can be sent to the NodeJS server which then fowards it to the UE client. This comand includes x/y values. The UE client upon receiving a tap command simulates a screen tap. The actual tap even coordinates received by Unreal Engine will show in the x/y textboxes at the bottom.

If this simulated `tap` is on the `Remote Click` button, the `Counter` will increase to indicate the remote tap was successful.


