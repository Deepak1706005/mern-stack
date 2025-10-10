 let name = "gurwinder";
        for(i = name.length-1; i>=0 ; i--){
            document.write(name[i]);
        }

        2
        for(i= 5; i>=1; i-=2){
            for(j = 5; j>=i; j-=2){
                document.write(j);
            }
            document.write("<br>");
        }

        3
        let a = 1;
        let b = 1;
        document.write(a);
        document.write(b);
        for(i = 0; i<=100; i++){
            c = a + b;
            document.write(c);

            a = b;
            b = c;
        }

        4
        let arr = [1,2,3,4,5]
        let sum = 0;
        for(i = 0; i< arr.length; i++){
            sum += arr[i];
        }
        document.write(sum)