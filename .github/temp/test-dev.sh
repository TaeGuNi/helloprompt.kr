#!/bin/bash
pnpm run dev &
DEV_PID=$!
sleep 15
curl -I http://localhost:4321
kill $DEV_PID
