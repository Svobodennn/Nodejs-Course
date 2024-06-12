// argv
console.log(process)
console.log(process.argv)
console.log(process.argv[2])


// process.env
console.log(process.env)
console.log(process.env.LOGNAME)

// pid
console.log(process.pid)

// cwd
console.log(process.cwd())

// title
console.log(process.title)

// memoryUsage()
console.log(process.memoryUsage())

// update() - uptime of process
console.log(process.uptime())

process.on('exit', (code) => {
    console.log(`about to exit with code ${code}`)
})

// exit()
process.exit(0) // success