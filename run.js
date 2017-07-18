const cp = require('child_process');

const times = [];

let i, f, t;

//C

console.log('Calculando C');
cp.spawnSync('gcc', ['teste.c', '-o', 'testec']);
i = new Date().getTime();
cp.execFileSync('./testec');
f = new Date().getTime();
t = f - i;
times.push({l:'C', t});

//C++

console.log('Calculando C++');
cp.spawnSync('g++', ['teste.cpp', '-o', 'testecpp']);
i = new Date().getTime();
cp.execFileSync('./testecpp');
f = new Date().getTime();
t = f - i;
times.push({l:'C++', t});

//C#

console.log('Calculando C#');
i = new Date().getTime();
cp.spawnSync('dotnet', ['run'], {cwd: './testecs'});
f = new Date().getTime();
t = f - i;
times.push({l:'C#', t});

//Dart

console.log('Calculando Dart');
i = new Date().getTime();
cp.spawnSync('dart', ['teste.dart']);
f = new Date().getTime();
t = f - i;
times.push({l:'Dart', t});

//Go

console.log('Calculando Go');
cp.spawnSync('go', ['build'], {cwd: './testego'});
i = new Date().getTime();
cp.execFileSync('./testego/testego');
f = new Date().getTime();
t = f - i;
times.push({l:'Go', t});

//Java

console.log('Calculando Java');
cp.spawnSync('javac', ['teste.java']);
i = new Date().getTime();
cp.spawnSync('java', ['teste']);
f = new Date().getTime();
t = f - i;
times.push({l:'Java', t});

//JS

console.log('Calculando JS');
i = new Date().getTime();
cp.spawnSync('node', ['teste.js']);
f = new Date().getTime();
t = f - i;
times.push({l:'JS', t});

//JavaScript

console.log('Calculando Lua');
i = new Date().getTime();
cp.spawnSync('lua5.3', ['teste.lua']);
f = new Date().getTime();
t = f - i;
times.push({l:'Lua', t});

//PHP

console.log('Calculando PHP');
i = new Date().getTime();
cp.spawnSync('php', ['teste.php']);
f = new Date().getTime();
t = f - i;
times.push({l:'PHP', t});

//Perl

console.log('Calculando Perl');
i = new Date().getTime();
cp.spawnSync('perl', ['teste.pl']);
f = new Date().getTime();
t = f - i;
times.push({l:'Perl', t});

//Python

console.log('Calculando Python');
i = new Date().getTime();
cp.spawnSync('python3', ['teste.py']);
f = new Date().getTime();
t = f - i;
times.push({l:'Python', t});

//Ruby

console.log('Calculando Ruby');
i = new Date().getTime();
cp.spawnSync('ruby', ['teste.rb']);
f = new Date().getTime();
t = f - i;
times.push({l:'Ruby', t});

//Rust

console.log('Calculando Rust');
cp.spawnSync('rustc', ['teste.rs', '-o', 'testers']);
i = new Date().getTime();
cp.execFileSync('./testers');
f = new Date().getTime();
t = f - i;
times.push({l:'Rust', t});

//Swift

console.log('Calculando Swift');
i = new Date().getTime();
cp.spawnSync('swift', ['teste.swift']);
f = new Date().getTime();
t = f - i;
times.push({l:'Swift', t});

//Mostrando resultado

times.sort((a, b)=> a.t - b.t);
console.log();
console.log('Tempo em milisegundos');
console.log();
times.forEach((item)=>{
	console.log(`${item.l}\t\t${item.t}`);
});