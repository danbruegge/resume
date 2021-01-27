#!/bin/sh

HL='\033[1;33m' # Hightlight
NC='\033[0m' # No Color

echo "${HL}> Deploy Page${NC}"
scp -r out/* <TARGET>

echo "${HL}> Deploy PDF${NC}"
scp -r public/cv.pdf <TARGET>
