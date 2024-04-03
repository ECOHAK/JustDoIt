function solution(a, b, c, d) {
    
    if(a==b && b==c && c==d) return 1111 * a;
    
    if(a==b && a==c) return Math.pow(10 * a + d, 2);
    if(a==b && a==d) return Math.pow(10 * a + d, 2);
    if(a==c && a==d) return Math.pow(10 * a + b, 2);
    if(b==c && b==d) return Math.pow(10 * b + a, 2);
    
    if(a==b && c==d) return (a + c) * Math.abs(a - c);
    if(a==c && b==d) return (a + b) * Math.abs(a - b);
    if(b==c && a==d) return (a + b) * Math.abs(a - b);
    
    if(a==b && c!=d) return c * d;
    if(a==c && b!=d) return b * d;
    if(a==d && b!=c) return b * c;
    if(c==d && a!=b) return a * d;    
    
    if(a!=b && b!=c && c!=d) return Math.min(a, b, c, d);
        
}