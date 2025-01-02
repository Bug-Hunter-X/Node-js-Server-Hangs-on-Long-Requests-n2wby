# Node.js Server Hanging on Long Requests

This repository demonstrates a common issue in Node.js servers where long-running requests can cause the server to hang, becoming unresponsive to other requests.  The provided code showcases the problem and a solution using asynchronous operations and timeouts.

## Problem

The `server.js` file contains a simple HTTP server that simulates a long-running operation within the request handler.  This blocks the event loop, preventing the server from processing subsequent requests until the operation completes. This results in unresponsive behavior.

## Solution

The `serverSolution.js` file provides a solution that addresses this issue. It uses asynchronous techniques and a timeout mechanism to prevent the server from hanging.