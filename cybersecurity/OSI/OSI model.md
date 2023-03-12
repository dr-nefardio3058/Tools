The OSI Model

The OSI ("Open Systems Interconnection") model represents an easy and intuitive way to standardize the different parts required to communicate across networks.

The model makes it clear what is required to communicate on a network by splitting the requirements into multiple layers.

This is what the OSI Model looks like:

Layer: What it does?

7 - Application	Where humans process data and information
6 - Presentation	Ensures data is in a usable format
5 - Session	Capable of maintaining connections
4 - Transport	Data is forwarded to a service capable of handling requests
3 - Network Layer	Responsible for which path packets should travel on a network
2 - Data Link	Responsible for which physical devices packets should go to
1 - Physical	The physical infrastructure to transport data
The top 3 layers are typically implemented in software within the Operating System:

Layer:Where it is implemented?

7 - Application	Software
6 - Presentation	Software
5 - Session	Software

The bottom 3 layers are typically implemented in hardware within devices on the network, e.g. Switches, Routers and Firewalls:

Layer:Where it is implemented
3 - Network Layer	Hardware
2 - Data Link	Hardware
1 - Physical	Hardware

Layer 4, the Transport layer, connects the software with the hardware layers.