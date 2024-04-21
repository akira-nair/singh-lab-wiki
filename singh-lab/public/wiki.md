# Singh Lab Wiki
## Intro to Oscar: Your supercomputer
In the Singh lab, we run a lot of BIG machine learning models on a lot of BIG data. Doing this on your laptop can quickly make it heat up and overload :( Here's where Oscar comes in! Oscar is Brown's very own supercomputer, where we store all out data and run all our scripts. When joining the lab, make sure to set up an account on Oscar. You can get an account [here](https://brown.co1.qualtrics.com/jfe/form/SV_0GtBE8kWJpmeG4B). Select "Exploratory Account with PI" and make sure to put Ritambhara Singh as the point of contact. Oscar is maintained by Brown's Center for Computation and Visualization; they hold office hours every week and have a [documentation website](https://docs.ccv.brown.edu/oscar) which is  a great guide on how to use the resource. 

To begin using Oscar, you first need to connect to it on your local device. You can do this by opening up terminal and typing the following command:
```
ssh <username>@ssh.ccv.brown.edu
```
Your username should be your cs-login (e.g. anair27).
After typing this command and hitting enter, you will likely have to complete a Duo-push request, then your terminal will officially be connected to Oscar! If you are having issues, make sure you are connected to Brown Wi-Fi. If you are not on Brown Wi-Fi, you can connect to it using this [VPN](https://vpn.brown.edu/vdesk/webtop.eui?z=/Common/Brown-Shib-VPN-Brown_Default&webtop=/Common/Brown-Shib-VPN-brown-vpn_webtop&webtop_type=webtop_na_only) link then trying the command in terminal again.

## Navigating Linux

### Navigation
```
cd <directory>
``` 
The `cd` command stands for "change directory" and is used to navigate around folders in your computer. When you type `cd` followed by the name of the directory and hit Enter, the terminal will automatically navigate to that folder. 

For example, if you want to go to a folder named "Documents," you would type `cd Documents` and hit Enter. It's important to note that you can only access folders that are directly contained within the directory you're currently located in. To enter the parent directory, type `cd ..`, which will automatically move you up one level in the folder hierarcy.

If you're ever unsure of which folders you can navigate into, simply type `cd`, then press the Tab key. This will prompt the terminal to display a list of available directories you can enter, making navigation even easier

```
pwd 
```

The `pwd` stands for "print working directory" and displays the absolute path of the directory you are currently in. It's handy for checking where exactly you're located within the Oscar file system. 

```
ls [filepath]
```
The ```ls``` command, short for "list", prints the files and directories that are located within your current directory. You can optionally add a filepath as well to view the files and directories within the specified filepath. 

```
ls | wc -l [filepath]
```
Print out the number of files in a specific directory. You can optionally add a filepath as well to the count the files within the specified filepath. 

### Editing Files

```
mkdir <directory-name>
```

The mkdir command is used to create new directory with the specific directory name.

```
touch <filename>
```

If the filename specified in the command doesn't exist, touch will create an empty file with that name. If the file already exists, touch will update its modification timestamp to the current time, without changing its content.

```
cp [-r] <original-filepath> <copy-filepath>
```
The `cp` command lets you copy over a file or directory from one place to another. Simply specify the file or directory's filepath you want to copy, and then indicate the destination where you want to paste it. If you're copying a directory, remember to add `-r` after `cp` to ensure the contents of the directory are copied over as well. 

```
nano <filename>
```

nano is a simple text editor that provides basic editing features in a user-friendly interface within the terminal window. You can learn more about commands to edit files using nano [here](https://www.tutorialspoint.com/how-to-use-nano-text-editor).

```
rm [-r] <filepath>
```

The ```rm``` command deletes a file or directory permanently. Type ```rm``` followed by the name of the file/directory you'd like to remove. There is no undo command to reverse this process, so make sure you're sure about the deletion before you hit enter. If you're deleting a directory, make sure to add the `r` flag after the `rm` command. 

```
find  -name 'slurm*' -exec rm {} \;
```
Remove all files starting with some string for example “slurm” in the current directory.

```
wc <filepath>
```
Prints out the word count of a file in lines, words and characters.

```
cat <filepath>
```

Print out everything in a specifc filepath.


### Memory and Quota


```
du -h [filepath]
```

Check the size of a file or directory. You can add an optional path of a specific file or directory to get its respective size.

```
checkquota
```

Prints out the quota of your memory and computational resources. You can also check how much of resources you have currently used.

```
myq
```

Print out the status of current jobs submitted to oscar

```
watch myq [seconds]
```

Print out the status of current jobs submitted to oscar
every second by default. You can change this time interval my specifying the seconds argument. 




## Submitting your first script
You can imagine lots of people wanting to use Oscar at the same time for different tasks, like running simulations, analyzing data, or doing complex calculations.

SLURM, Oscar's workload manager, helps manage this by organizing who gets to use the computer and when. Here's how it works:

When you have a task you want to run on the supercomputer, you create what's called a "job." This job includes information like how many processors you need, how much memory, how long it will take, and what scripts you want to run. Once you submit your job, SLURM puts it in a queue along with all the other jobs waiting to run. Your job waits its turn until the resources it needs become available. When it's your job's turn to run, SLURM finds the right resources on the supercomputer to run it. It might allocate specific processors, memory, and other resources based on what you requested. Once the resources are allocated, SLURM starts running your job. Your task gets executed on the supercomputer just like it would on a regular computer, but with the added power of all those processors and memory. While your job is running, SLURM keeps an eye on it to make sure everything is going smoothly. If there are any issues or errors, SLURM will stop the job and let you know what happened. SLURM provides you with a generated output file. You can then use these results for further analysis and to see if your job worked as expected.

To create a job, you first have to define a bash script. We usually keep a bash script associated with every runable python file. For example, if I have a python script `preprocess_data.py` that will preprocess a dataset, I might make a `preprocess_data.sh` that calls on the python script to run. Here is a basic template for a bash script:
```shell
#!/bin/sh
#SBATCH -N 1
#SBATCH -n 4
#SBATCH --mem=64G
#SBATCH -t 3:00:00
#SBATCH -o /users/<username>/data/<username>/script_name%j.out

cd <path/to/script>
python script.py
```
To submit your job to SLURM, you can run the following command.
```shell
sbatch /path/to/my_script.sh
```

There are numerous flags that you can use to adjust how your job requests resources. You can find more [here](https://docs.ccv.brown.edu/oscar/submitting-jobs/batch#sbatch-command-options).
If you would like to request GPUs for your job, you can add the `#SBATCH --gres=gpu:1` flag to your bash script.

To run your script, you can either sumbit a job or run it [interactively](https://docs.ccv.brown.edu/oscar/submitting-jobs/interact).

## Creating your workflow
Everyone has their own preferences for a good workflow, but here are some recommendations from us!
1. [OPEN-ON DEMAND](https://ood.ccv.brown.edu/pun/sys/dashboard/). This is a website that allows you to run your scripts online. It is a great beginner-friendly option for getting started with Oscar. They allow you to run Jupyter notebooks, which are a great way to get code snippets and test your code. Once you resolve all your code bugs and have all the parts for your script, just copy and paste your notebook code into a python file to run that as a bash script for a more computationally heavy task.
2. [VS Code Extension](https://docs.ccv.brown.edu/oscar/connecting-to-oscar/remote-ide). VS Code is a great IDE to work with, and you can actually connect the app to Oscar! Follow the style guide to set that up. VS Code also allows you to download files from Oscar to your local machine. 