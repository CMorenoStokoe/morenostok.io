/*

Software list 

*/

const mrsoftwarelist = [
    {name: 'cmorenostokoe/MiRANA',link: 'www.morenostok.io/mirana',database: 'Manual',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 1,'network: directed (acylic) graph' : 1,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'MendelianRandomization',link: 'https://cran.r-project.org/web/packages/MendelianRandomization/index.html',database: 'CRAN',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 1,'forest plot' : 1,'manhattan plot' : 1,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'mrbayes',link: 'https://cran.r-project.org/web/packages/mrbayes/index.html',database: 'CRAN',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'mr.raps',link: 'https://cran.r-project.org/web/packages/mr.raps/index.html',database: 'CRAN',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'MRPC',link: 'https://cran.r-project.org/web/packages/MRPC/index.html',database: 'CRAN',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 1,'network: undirected graph' : 0,'network: directed (acylic) graph' : 1,'network: DAG' : 1,'heatmap' : 0,}},
    {name: 'hJAM',link: 'https://cran.r-project.org/web/packages/hJAM/index.html',database: 'CRAN',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 1,}},
    {name: 'GLIDE',link: 'https://cran.r-project.org/web/packages/GLIDE/index.html',database: 'CRAN',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'iva',link: 'https://cran.r-project.org/web/packages/iva/index.html',database: 'CRAN',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'hdose',link: 'https://pypi.org/project/hdose/',database: 'PyPi',language: 'python',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'pysumstats',link: 'https://pypi.org/project/pysumstats/',database: 'PyPi',language: 'python',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'mrrobust',link: 'https://ideas.repec.org/p/boc/usug17/14.html',database: 'Stata SSC',language: 'stata',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 1,'forest plot' : 1,'manhattan plot' : 1,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'MRCIEU/PHESANT',link: 'https://github.com/MRCIEU/PHESANT',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'rondolab/MR-PRESSO',link: 'https://github.com/rondolab/MR-PRESSO',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'peteryin21/py-merp',link: 'https://github.com/peteryin21/py-merp',database: 'GitHub',language: 'py',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'jrs95/nlmr',link: 'https://github.com/jrs95/nlmr',database: 'GitHub',language: '',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'gtx ',link: 'https://rdrr.io/cran/gtx/man/gtx-package.html',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 1,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'jrs95/nlmr',link: 'https://github.com/jrs95/nlmr',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'jingshuw/GRAPPLE',link: 'https://github.com/jingshuw/GRAPPLE',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'gqi/MRMix',link: 'https://github.com/gqi/MRMix',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'mikelove/mrlocus',link: 'https://github.com/mikelove/mrlocus',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'jiazhao97/BWMR',link: 'https://github.com/jiazhao97/BWMR',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 1,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 1,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'cnfoley/mrclust',link: 'https://github.com/cnfoley/mrclust',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'carloscinelli/mrsensemakr',link: 'https://github.com/carloscinelli/mrsensemakr',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 1,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'n-mounier/MRlap',link: 'https://github.com/n-mounier/MRlap',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'liusy-jz/MRBIGR',link: 'https://github.com/liusy-jz/MRBIGR',database: 'GitHub',language: 'perl',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 1,'manhattan plot' : 1,'bar chart' : 1,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'remlapmot/ivonesamplemr',link: 'https://github.com/remlapmot/ivonesamplemr',database: 'GitHub',language: 'stata',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,}},
    {name: 'DAGitty - web',link: 'http://www.dagitty.net/',database: 'GitHub',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,}},
    {name: 'DAGitty - R',link: 'http://www.dagitty.net/',database: 'GitHub',language: 'r / rstudio',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'DiagrammeR',link: 'http://rich-iannone.github.io/DiagrammeR/',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 1,'network: directed (acylic) graph' : 1,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'askieslinger/MRTool',link: 'https://github.com/askieslinger/MRTool',database: 'GitHub',language: '',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'CYShapland/BESIDEMR',link: 'https://github.com/CYShapland/BESIDEMR',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'LaiJiang/CIVMR',link: 'https://github.com/LaiJiang/CIVMR',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'daskrohn/RBD_SMR',link: 'https://github.com/daskrohn/RBD_SMR',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'william-denault/CFMR',link: 'https://github.com/william-denault/CFMR',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'vaskarageorg/SCA_MR',link: 'https://github.com/vaskarageorg/SCA_MR',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'zhonghualiu/MRMiSTERI',link: 'https://github.com/zhonghualiu/MRMiSTERI',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'hunt-genes/harmonize_dosage',link: 'https://github.com/hunt-genes/harmonize_dosage',database: 'GitHub',language: 'py',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'SharonLutz/reverseC',link: 'https://github.com/SharonLutz/reverseC',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 1,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'm1sorenson/mendelian_randomization',link: 'https://github.com/m1sorenson/mendelian_randomization',database: 'GitHub',language: '',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'junghyunJJ/ggmend',link: 'https://github.com/junghyunJJ/ggmend',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'visNetwork',link: 'https://cran.r-project.org/web/packages/visNetwork/vignettes/Introduction-to-visNetwork.html',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 1,'network: undirected graph' : 1,'network: directed (acylic) graph' : 1,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'Sung-Bong-Kang/Simple_MR',link: 'https://github.com/Sung-Bong-Kang/Simple_MR',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'peteryin21/MeRP',link: 'https://github.com/peteryin21/MeRP',database: 'GitHub',language: 'py',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'danieliong/MRPATH',link: 'https://github.com/danieliong/MRPATH',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'kehongjie/ImagingMR',link: 'https://github.com/kehongjie/ImagingMR',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'WSpiller/RMVMR',link: 'https://github.com/WSpiller/RMVMR',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'XiaofengZhuCase/IMRP',link: 'https://github.com/XiaofengZhuCase/IMRP',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'Gizmodiat/AMANDE',link: 'https://github.com/Gizmodiat/AMANDE',database: 'GitHub',language: 'shell',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'jalabrecque/MRchecks',link: 'https://github.com/jalabrecque/MRchecks',database: 'GitHub',language: '',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'remlapmot/bpbounds',link: 'https://github.com/remlapmot/bpbounds',database: 'GitHub',language: 'r',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'MR Visualisation Tool',link: 'http://bristol-medical-stat.bristol.ac.uk:3838/MR-Vis/',database: 'Manual',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 1,'any (programmable)' : 0,}},
    {name: 'Cytoscape',link: 'https://cytoscape.org/',database: 'Manual',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 1,}},
    {name: 'Epigraph DB',link: 'https://epigraphdb.org/',database: 'Manual',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 1,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'D3',link: 'https://d3js.org/',database: 'Manual',language: 'javascript',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 1,'any (programmable)' : 1,}},
    {name: 'Tetrad',link: 'https://www.ccd.pitt.edu/',database: 'GitHub',language: 'r, python, application, website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'ggdag',link: 'https://cran.r-project.org/web/packages/ggdag/vignettes/intro-to-ggdag.html',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'dagR',link: 'https://cran.r-project.org/package=dagR',database: 'GitHub',language: 'r',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'shinyDAG',link: 'https://apps.gerkelab.com/shinyDAG/',database: 'GitHub',language: 'website',visualisation: 1,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 1,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
    {name: 'DAG program',link: 'https://hsz.dife.de/dag/',database: 'GitHub',language: 'application',visualisation: 0,capabilities: {'scatter plot' : 0,'line chart' : 0,'forest plot' : 0,'manhattan plot' : 0,'bar chart' : 0,'dendrogram' : 0,'network: undirected graph' : 0,'network: directed (acylic) graph' : 0,'network: DAG' : 0,'heatmap' : 0,'radial graph' : 0,'any (programmable)' : 0,}},
]    


/* 

Add filter options 

*/
var filters = {
    language: [],
    visualisation: false
};

const filterList = (criteria, value) => {
    if(criteria === 'language'){
        const index = filters[criteria].indexOf(value);
        if (index > -1) {
            filters[criteria].splice(index, 1);
            console.log('reset value', criteria, value, filters)
        } 
        else {
            filters[criteria].push(value);
            console.log('changed value', criteria, value, filters)
        }
    } else {
        filters.visualisation = !filters.visualisation;
        console.log('changed value', criteria, value, filters)
    }
}

/* 

Display list

*/

const generateList = () => {

    // Clear list
    document.getElementById('mrsoftwarelist').innerHTML = "";
    console.log(mrsoftwarelist)
    console.log(filters)

    // Define function to add items to list
    const listItem = () => {

        // Meta properties
        var card = document.createElement('DIV');
            card.className = 'card m-2';

        var head = document.createElement('DIV');
            head.className = 'card-header d-flex flex-row align-items-center';
        
        var title = document.createElement('h5');
            title.innerText = repo.name.split("/").length > 1 ? repo.name.split("/")[1] : repo.name;
            
        var body = document.createElement('DIV');
            body.className = 'card-body';

        var foot = document.createElement('DIV');
            foot.className = 'card-footer d-flex flex-row justify-content-between';

        // Author
        var author = document.createElement('p');
            author.className = 'text-muted';
            author.innerText = repo.name.split("/").length > 1 ? `Author: ${repo.name.split("/")[0]}` : '';

        // Link
        var link = document.createElement('a');
            link.href = repo.link;
            link.innerHTML = `Link (${repo.database}) <i class="fas fa-link"></i>`;

        // Language
        const selectColor = (e) => {
            if(e.includes('web')){return 'badge-success'};
            if(e.includes('stata')){return 'badge-info'};
            if(e.includes('js')){return 'badge-danger'};
            if(e.includes('java')){return 'badge-danger'};
            if(e.includes('r')){return 'badge-primary'};
            if(e.includes('py')){return 'badge-warning'};
            return 'badge-dark';
        }
        var lang_title = document.createElement('p');
            lang_title.innerText = 'Language:';
            lang_title.className = 'd-inline';
        var language = document.createElement('span');
            language.innerText = repo.language;
            language.className = `m-1 mb-2 badge ${selectColor(repo.language)}`;

        // Vis
        var vis_title = document.createElement('div');
            vis_title.innerText = 'Visualisation capabilities:'
        var listOfCapabilities = document.createElement('div');
        var visualisationCapabilities = false;
        for([graphType, capability] of Object.entries(repo.capabilities)){
            if(capability === 1){
                visualisationCapabilities = true;
                var type = document.createElement('span');
                    type.innerText = graphType;
                    type.className = 'm-1 p-1 badge badge-dark';
                listOfCapabilities.append(type);
            }
        }
        if(visualisationCapabilities === false){
            var type = document.createElement('span');
                type.innerText = repo.visualisation === 1? 'Other' : 'May not have visualisation capabilities';
                type.className = repo.visualisation === 1? 'm-1 p-1 badge badge-dark' : 'm-1 p-1 badge badge-light';
            listOfCapabilities.append(type);
        }

        // Append to page
        document.getElementById('mrsoftwarelist').append(card);
            card.append(head);
                head.append(title);
            card.append(body);
                body.append(lang_title);
                body.append(language);
                body.append(document.createElement('br'));
                body.append(vis_title);
                body.append(listOfCapabilities);
            card.append(foot);
                foot.append(link);
                foot.append(author);
    }
    
    for(repo of mrsoftwarelist){
        // Filter list
        var listMe = true;
        if(filters.language.length>0){
            for(const criteria of filters.language){
                if(repo.language.includes(criteria)){
                    listMe=true;
                    break;
                }else{
                    listMe=false;
                }
            }
        }
        if(filters.visualisation){
            if(repo.visualisation!==1){
                listMe=false;
            }
        }
        if(listMe === true){
            listItem();
        } else {
            continue;
        }
    }
}

/*

Initialise list on page load

*/
generateList();
