if [ -z $1 ] || [ -z $2 ]; then
  echo 'One of parameters not supplied. (first param: stg || prd, second param: "device name")'
  exit
elif [ 'stg' != $1 ] && [ 'prd' != $1 ]; then
  echo 'First parameter is only "prd" or "stg"'
  exit
fi

echo "active simulator, ios device: $1, server: $2 \n\n\n";
npm run ios:$1 -- --simulator="$2"