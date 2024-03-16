// Function to classify fuel economy based on deviation from average
const classifyFuelEconomy = (userInput) => {
  // Function to calculate average fuel economy for each vehicle class
  const calculateAverageFuelEconomy = (data) => {
    const averages = {};
    const counts = {};

    data.forEach((entry) => {
      const vehicleClass = entry["Vehicle Class"];
      const fuelEconomy = entry["Fuel Economy (km/l)"];

      if (!averages[vehicleClass]) {
        averages[vehicleClass] = 0;
        counts[vehicleClass] = 0;
      }

      averages[vehicleClass] += fuelEconomy;
      counts[vehicleClass]++;
    });

    for (const vehicleClass in averages) {
      averages[vehicleClass] /= counts[vehicleClass];
    }

    return averages;
  };

  const dummyData = [
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.709248215981766,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.231783012153663,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.851787009872037,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.65924786106583,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.820028939244512,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.37512335656158,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.210537767784746,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.94507778479958,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.23552891083234,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.149638957672565,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.599307934185667,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.213275137051983,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.352553962944214,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.660224806229184,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.88388854513697,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.916230914418527,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.341419285335377,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.78322340598931,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.0600209105503,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.827382613086236,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.090210437446377,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.965392711014243,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.982842310096213,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.89964827094338,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.36606985156175,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.669843042879595,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.24885724463668,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.16139034566441,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.88810989067035,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.598892235046808,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.894672437099207,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.88269575002137,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.582548264579575,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.165168194602703,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.340048598679,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.119215327162028,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.948344970819818,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.98280598447499,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.40225466705128,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.925634737794528,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.297575057777493,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.313493631155392,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.85935944304527,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.66869360290484,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.489510773025067,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.97625421362208,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.44965157492807,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.507802622446064,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 15.506603048635908,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.933045959802975,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.80774852511605,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.163487600432347,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.76796163749625,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.53346259790998,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.80504408139389,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.91079583062862,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.897707197301887,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.374189999170785,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.818926892115318,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.852680719533037,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.898921383751446,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.948275597663553,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.53483463124873,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.200044804962854,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.35317266538084,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.026331200187144,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.36083007450867,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.020793285918245,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.696673917685164,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.855688469105004,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.227659747022212,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.00790106090222,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.78226778690472,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.544822782693778,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.252984146171393,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.408730607577024,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.272594926927187,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.28828089491339,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.395888210357995,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.400464931634634,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.296540408650852,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.661111240029953,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.71274322261874,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.874223320658448,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.99677765840103,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.19645139811791,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.95269955151273,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.952228714855945,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.58724585566876,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.484906416799028,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.674724472961685,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.43981919432431,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.670460042516144,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.00154957579643,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.434943205857977,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.51433940412831,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.1844955437487,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.48586821790448,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.14523866810979,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 15.880812193445962,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.79245934207919,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.932989969743527,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.31518440215546,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 15.333541182799268,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.391131495167535,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.68637371285169,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.345940864319815,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.13378124685816,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.628536942622855,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.657219005845498,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.019509404189805,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.980953993322657,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.024428747922776,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.36205316138587,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.905612301948974,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.57392212437413,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.2989958956854,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.200010117238477,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.27459212824217,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.014287469732075,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.03011492027016,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.010946800360504,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.946162848761293,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.919937597468483,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.579657382580848,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.24407939076266,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.24595556748399,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.989881701274207,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.34726897986671,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.449286159235825,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.572223052216458,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.49074281940262,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.27780044370042,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.69027119067635,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.353837838027435,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.99795879581511,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.854679770987087,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.477255174901217,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.80878733013649,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.239932532449075,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.266456116589453,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.797053775686265,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.708293579043307,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.96225206078048,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.616765875511792,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.46833035307379,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.535788016440293,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.075986484813996,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.388383855322967,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.751221301747037,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.737608864372195,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.44146471722107,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.07853602171396,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.952906497102894,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.1348103990212,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.816979280870296,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.870082905761773,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.657582935363173,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.102462898655556,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.945049184096163,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 16.570348085794812,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.583696342868684,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.029905749974677,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.984242385981457,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.04817880468227,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.71568150151152,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.689116121727665,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.775570399597193,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.897532365655096,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.043431064743988,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.671527336062674,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 15.951402956966986,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.5132503899867,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.730628981453922,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.105189531058993,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 15.297371343874303,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 19.10800546004087,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.746986077890398,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 23.71104617223032,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.996891757888257,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.23652528230156,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.95821243641653,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 25.153998808095455,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.17352156214334,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.084599482778707,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.437904080829423,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.04176485992452,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.093458029081887,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 18.467289633872426,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 21.53028795957373,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.184955175759207,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.308710890073613,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.298838299639684,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.07052256440326,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 20.990239369955816,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.798095949386347,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 24.693781200047386,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.38758751832395,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 22.766234450309554,
    },
    {
      "Vehicle Class": "Compact",
      "Fuel Economy (km/l)": 17.19962290465149,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.304545688778898,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.93832058576465,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.802094883277062,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.900048179920619,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.099760942824924,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.80200752600862,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.81881761270895,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.671628905348943,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.966826989205876,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.036207479909397,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.336301394814878,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.449225166739334,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.903097845599047,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.60115177573732,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.819433612068051,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.443453480269012,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.528438972699455,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.083263617047137,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.741432505219095,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.215307406228098,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.279276045311308,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.375305928702659,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.570136665989452,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.036630215900992,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.264927574918678,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.436866909355645,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.516481707763905,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.940082778741282,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.711939064859845,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.724812229286378,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.83955433765567,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.181142002761987,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.189659458035443,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.89291798183007,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.987485277210663,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.328192696777464,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.137894189894496,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.965159409657915,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.662008512709168,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.308184682524713,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.741548971428777,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.68821057575925,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.267005850513748,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.200731468527618,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.63559237536332,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.317839170641006,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.291067762981326,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.966562242445207,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.43889286306975,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.06122941716465,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.035193724969005,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.661127752264589,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.476744146576845,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.224285519610898,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.025348333506665,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.68966269257237,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.496578106039266,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.776298722436163,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.387200752071847,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.93543008291589,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.213353782717363,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.899971458995296,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.82295862031316,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.769081371298729,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.240965022393686,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.525045861903395,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.32003457321834,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.623988640366521,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.455091199359611,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.615692337632384,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.524707033918205,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.417563543466176,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.992892507874842,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.316351101336917,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.274640582896009,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.668896225828284,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.07340174600313,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.007266977796938,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.445700842250918,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.13755968612606,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.203888897820201,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.503594960139655,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.089661840607405,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.97507028272464,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.136186560537908,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.979676883710265,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.17962765679214,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.562741795212395,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.354537240636304,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.001815323114121,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.427245403303145,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.1655206448327,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.930734882271619,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.260140315002936,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.15093334924396,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.636262345804036,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.320449074914237,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.651021528582323,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.213807527259807,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.664549984957103,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.705124939484781,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.76598408888591,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.505765266113158,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.03781346910182,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.952447334299208,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.144163402760604,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.625346627239104,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.304811418748226,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.075504006481061,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.614962869722177,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.818446455593586,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.793348967456012,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.85638623355992,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.50854298169158,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.654775788423093,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.601607356381416,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.606368822235986,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.063927375430323,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.633155490890767,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.42786735252031,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.01444406475495,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.069291636383792,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.201346308238108,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.217975453475198,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.891377337223762,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.330989759214084,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.076632446261137,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.740946826459576,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.385281831647394,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.306456883096615,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.233558766907969,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.04986868027196,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.276546369351298,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.112760798590736,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.393966435935544,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.863243830428786,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.986380463588869,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.63762164571946,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.477101519686396,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.004750674247017,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.469462987296613,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.632716906152684,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.901088564146512,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.472159283883649,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.313407393488294,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.027100817826792,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.462025743051417,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.348501854150111,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.423808781818208,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.526090358060834,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.484653744189323,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.575289434348424,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.974011474166042,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.322724193672588,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.90897105042814,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.572742767765117,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.522795059497732,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.971375447902895,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.801871531284519,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.22564617750452,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.28127089951368,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.812635863034323,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.1506206543566,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.325688334711025,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.317425389989856,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.926158408674503,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.638732342720434,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.869964816663813,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.726845963995252,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.7002110288099,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.110819111060598,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.084403262539126,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 15.129129641433522,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.83260598049617,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.737681477831995,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.826840095101183,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.04088149955138,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.376385274028058,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.052895021849087,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.03166653032814,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.544763735486573,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.517236058204983,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.037312136276096,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.842738714964748,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.699941516461902,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.65908496384221,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.734948445718393,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 11.011797605902856,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.467945536351952,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 9.683142852980254,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.806824211023159,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.299767856535134,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.53100168249485,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 13.044427809308454,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.638134729389108,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 10.487363771661574,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.205339778233366,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.504359637761679,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 14.858067720230041,
    },
    {
      "Vehicle Class": "SUV",
      "Fuel Economy (km/l)": 12.836869351249826,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.677351642682208,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.679820018433245,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.130380042775165,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.361611113707724,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.942350652427958,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.34133644832976,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.987963925466945,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.607314560351504,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.623263960818962,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.797527545395274,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.076564493905575,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.06675677088845,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.100096231893298,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.808554569826287,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.227843394238137,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.729843885489334,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.714066666577692,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.922547095046562,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.673277602931627,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.836754877493236,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.099047686871096,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.15581043884656,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.089997729696199,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.092402833636562,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.031567849771836,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.497825658232431,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.762607241890777,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.123129240017336,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.402157092268936,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.132795120017956,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.53637568209177,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.011499052366984,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.555803456161307,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.87241556938639,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.957987029048542,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.004638081775301,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.661394155018394,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.51456216242497,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.525222119620274,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.586118656763578,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.545430949307407,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.081480158852827,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.431100790513533,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.800991978106273,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.232702477202787,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.916791271695825,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.94220082032124,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.747534049225141,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.013016069759688,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.826761401843516,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.732803572027574,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.138551844867388,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.734713191336457,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.770493209805343,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.975857442182374,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.595252114977885,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.805674384099657,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.932277065332505,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.977134267551325,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.835744646512474,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.615367110064042,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.276294458304381,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.447785869350955,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.541412213815548,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.257964527352808,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.178783946143486,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.31089959645307,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.991678542245516,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.327941185680917,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.001892435226868,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.28675847740971,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.167843754274147,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.681596901338084,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.177284741310295,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.02324542236624,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.130117506114477,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.511732676742485,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.277685330719375,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.24128349285615,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.527589358313886,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.77335377698077,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.115382833714015,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.622975322282468,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.849777701000729,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.572341044894396,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.960751747887308,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.052329817110255,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.540984925443148,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.61927784819997,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.050623664100613,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.761802994457973,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.013243922633787,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.214146847357892,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.705845299157074,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.465422816661643,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.992970742205399,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.70750407218976,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.038742809718364,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.969613844043817,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.00509644152957,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.145212525599884,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.389126607546956,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.9250759522482,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.518943726051713,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.101401854637693,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.263801371613845,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.923862518569404,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.199198489236977,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.74393274121301,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.294771848178433,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.178074322383639,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.056304579874874,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.927477130345828,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.26552910405936,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.49946924012698,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.889507383585158,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.87797327448689,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.21527232989326,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.024554355319868,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.344280133627663,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.81782241246772,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.900660204704852,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.228685913981156,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.535780691566021,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.12450401864344,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.391395050081844,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.959219815830425,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.198754476600595,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.126885365820545,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.514043279886252,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.421930405837351,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.93839083893061,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.350271704165202,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.846336817317182,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.193478985345777,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.225883794499172,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.328933260668007,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.721536008156173,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.218603638674526,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.063761240718492,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.268999115278534,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.783823254774873,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.360552676498195,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.935145247877719,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.7278454872038,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.102923281023301,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.391829407585837,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.991330184903024,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.164510357936875,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.214661411500852,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.68468734885942,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.586138309448923,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.854832086778584,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.194694554290717,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.109240506666046,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.19707921553885,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.726439741649965,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.883879694102333,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.924944310511343,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.24399032982512,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.48476405550811,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.741704884964646,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.110389495561897,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.812453656867127,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.018388095565976,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.289583013108063,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.844923117983551,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.044922650283366,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.284981350601313,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.826082475283112,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.219814627958373,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.260596638797882,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 17.842674217180345,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.056768480622868,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.971512217382646,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.522199233392751,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.299109394869909,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.831331053363096,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.25036082893467,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.562922925979128,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.263421724333789,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.438873159330281,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.475778541308639,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.098165959683227,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.290482191676427,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.189804012515328,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.713204928876424,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.7655061764994,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.458555627540813,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.990385744786348,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.114119876249994,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.173992153462365,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.79804084013676,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 11.864099299039653,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 15.927143714954967,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 16.390986448811116,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.480830632384443,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 12.83516729355669,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 13.430490019424045,
    },
    {
      "Vehicle Class": "Sedan",
      "Fuel Economy (km/l)": 14.650147849309732,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.141989869908407,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.772853704760728,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.387580871696002,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.89124916163925,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.985204990517362,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.308827007189926,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.08753485897617,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.284021790817274,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.748646437654113,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.573842593798336,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.196826025721057,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.836502049745608,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.2423382040145,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.139533353361838,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.027499804510914,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.981299551047108,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.786094092118775,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.76716335924644,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.793974402131887,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.091352889046131,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.114232220998456,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.7498636425518015,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.122977763150523,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.41459055331788,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.12578315577715,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.69776739992831,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.4252192348827,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.916092069148739,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.293524047159712,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.334569690852604,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.191277301089617,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.171470213329954,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.971372869647253,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.550948182492265,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.906678937137938,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.130927907610037,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.143825996170225,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.272460478553896,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.19180541645548,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.986375193336066,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.822612514894183,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.245134076588995,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.276495176169513,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.169223805618303,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.403910595674635,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.233348184836613,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.39441363059167,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.638352787137642,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.118804431276475,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.161700789645455,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.209826098063555,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.389660634746638,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.827707993952824,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.707663683653532,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.650536266330835,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.589483325053513,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.802068676180984,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.544685638407717,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.587294301708363,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.108234164222967,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.124350628226136,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.01852954093674,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.3971165626014,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.767512688312298,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.8877559892301115,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.36107303060332,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.278347896132882,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.552241196301935,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.61175621339941,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.611528135147154,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.052568478976443,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.977408706863422,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.587074446385602,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.975352269048487,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.472705947277339,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.080628295366758,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.209004571773074,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.589129339012336,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.711927775779689,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.861049323104762,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.976456042871446,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.918297551858319,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.613216622599804,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.942772058164574,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.469925458910584,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.986778386376949,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.622690358694651,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.851224621014294,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.894881945442794,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.590843837689975,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.174202385733459,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.000767950964876,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.424729348494115,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 6.98855450908777,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.58961008040645,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.989227395509205,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.38055684517279,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.355923311543068,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.557985723520899,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.705041399966328,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.999443357312089,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.328927663333822,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.009469033011332,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.441723818800764,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.899705044640473,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.884454022922663,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.035266210464522,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.473598307253816,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.740552434226712,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.938583647772472,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.233119733943093,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.22108476821261,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.878228500390868,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.26090862695727,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.818145085833404,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.038994760944767,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.492278835224743,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.881204285044179,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.080741326778625,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.158415641604392,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.313776932617497,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.437628780200772,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.231476968334551,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.799626472407736,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.934687180251496,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.791894278253205,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.358438538019438,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.511315296147384,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.97956731475119,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.162310063872133,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.953038222788294,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.37109744134635,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.530092274993193,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.643010649736588,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.73250840108875,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.830497515142977,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.310803507394667,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.871473385631052,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.097373112298325,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.412228012541767,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.743533766168134,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.422244289843508,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.1489829234694255,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.181352629302427,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.073302737009934,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.66571979129319,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.608262153042116,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.447953094806369,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.473270095709353,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.841852739597522,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.629067821821009,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.664753414207649,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.137275138203333,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.615043460126365,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.369497612344947,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.885247792359706,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.3796116274809265,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.529346933286602,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.617373871869419,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.274075761209923,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.031430252708985,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.529535197603632,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.918812406583124,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.733019097357499,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.805265335761758,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.509537150209285,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.780906780505928,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.485483952907135,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.119347934838707,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.750430655532455,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.969403189821303,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.731713247494831,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.587860088612297,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.124417618589238,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.444552138990627,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.438956650401451,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.574326276379946,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.426345196704496,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.868021312697689,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.264973859980126,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 12.232587503090988,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.776752249347537,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.263768841455448,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.7356507394943055,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.015536424421276,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.711791117494454,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.631416534269,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.780556975189702,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.276785758522481,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.701737337552228,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.0197266869742805,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.64573479876693,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 11.429724601164075,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.30913027770487,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.16427336707158,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.207203278648095,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 7.561659425779532,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 8.2565345778372,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 9.015903599570736,
    },
    {
      "Vehicle Class": "Truck",
      "Fuel Economy (km/l)": 10.75151431070515,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.37220873765516,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.100955977328773,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.17925285577401,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.96244652687773,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.989013946255584,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.244941909981039,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.100598734924802,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.670739897628785,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.312376703696986,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.834183673761203,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.750684349953522,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.459280758050594,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.89083414667632,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.333631278391078,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.407288272153979,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.733709745093368,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.581613946256303,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.592757349364216,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.431055076809999,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.989368697656994,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.726106457961968,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.378240028779098,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.82112614737255,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.32176643596065,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.97400811871617,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.060431032107639,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.43061455210751,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.197386988200098,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.300275003761415,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.470162484821548,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.413912965516118,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.368561596567467,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.050154403016913,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.459401258761629,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.855958844560638,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.039751570459995,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.159764327751471,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.083179740967262,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.05491570978282,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.461351280007873,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.754643504526394,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.995697584147683,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.40208496605687,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.077772994839593,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.023157559726972,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.978891704670918,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.999135770061379,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.122944669858757,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.579579368337981,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.751362590724302,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.192620544151547,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.148723985919862,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.329016618966616,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.690960678654044,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.517591907746443,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.740854176266936,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.32536198734733,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.137269173914735,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.248092704468352,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.484729948230838,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.130076214251723,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.06424980347621,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.777151699281479,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.56235996864967,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.600457672830782,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.82770573643216,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.063193575893424,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.116166844956435,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.55847415962595,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.481549868401167,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.226141015929663,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.498870721777177,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.522084798291186,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.345020661468238,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.142029674042956,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.967498031857524,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.041814740901263,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.75324189532568,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.844035295676669,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.020455416294606,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.479475656386528,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.456263345355136,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.44912969016162,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.537777684721885,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.12644648795635,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.283919961783184,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.145607487395264,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.57887288452188,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.381011164136552,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.765129246526008,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.154720171980568,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.636298117680788,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.919424356565594,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.160871983925254,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.103717276163904,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.129187167507887,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.660876778716522,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.976883818976717,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.746027060826536,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.418267499266367,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.481645036949969,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.47097695984029,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.500351043357822,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.736808491909269,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.963790036977462,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.93209037348385,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.008219660263507,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.798751993719202,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.773389974610744,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.792840981807602,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.966422778825349,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.381566974642258,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.879115513085804,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.817480973852025,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.814230951510671,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.940824712070583,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.817494936781829,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.809420254731021,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.02631840255331,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.196115838792167,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.104045918888445,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.889110720342199,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.723523701355184,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.859742559506005,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.895553735481744,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.83962700229118,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.524574768139654,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.868152013726359,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.983601883117691,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.230571091723188,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.269378261878837,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.936557789762869,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.179617475946497,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.871225591009264,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.66824342821548,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.979800409083898,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.36194478450016,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.694667784321389,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.307617482891736,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.801768080228157,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.455016872211651,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.954682245576798,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.230016681936444,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.781928672593086,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.589873237115158,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.344641642330801,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.640272177565596,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.020176218236234,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.905003773174613,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.717583325548368,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.29559354879003,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.832667549505608,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.11153591747803,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.793947828879649,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.52813251855203,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.90740751461715,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.320508934491219,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.011330252392977,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.700466956256998,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.257583731271875,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.181682410200853,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.373434444292434,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.997629503081885,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.487473016039571,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.394952511263417,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.205629355041113,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.876126593775389,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.617150105304066,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.888667536754006,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.16976279511404,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.110628007735858,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.039250478685243,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.90546158061383,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.714668003839053,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.338424883567827,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.868628557386037,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.330913456333356,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.78894895448395,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.145425508920562,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.30054313016058,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.806782958734043,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.55132068053793,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.948819126016234,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.27033627825642,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.102088933766325,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.5656824744363,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 13.914676697697685,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.757148169651476,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.374064953839877,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.298055681299962,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.600936182292198,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.837387232860845,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 16.081011945736368,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.079467410678769,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 15.310912865993778,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.758410513512574,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 14.56011208670732,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 10.602440515707006,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 11.605275271315165,
    },
    {
      "Vehicle Class": "Van",
      "Fuel Economy (km/l)": 12.527418976130594,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.60626921188876,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.849283004100453,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.625761617925033,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.237874810198278,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.088693596463152,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.32820155669858,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.68072883056621,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.268542347281556,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.500301020527637,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.08754757905132,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.02622783628907,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.974564129258376,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.980662508859897,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.079476310806275,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.96779669246773,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.713542555907505,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.674952922496377,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.65500019941262,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.3965599137339,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.316453801525395,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.216105565080284,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.775083955190613,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.8601280352415,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.947138620566783,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.8622668944677,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.468797263601697,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.192413197323525,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.05665923532922,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.48053464764828,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.20274287806669,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.345500002182163,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.86039853528929,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.919387848877438,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.772014101145626,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.26546813791425,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.77618103337162,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.73353081870696,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.214544327730124,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.92867509373444,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.499277210489456,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.8843799672833,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.763965559162155,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.1723596092237,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.513540699858353,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.306324981934594,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.961196282735894,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.735197477220215,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.933935749813013,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.726374500545376,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.65726792758608,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.939724312216708,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.339955109157778,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.821625334264702,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.42109077991389,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.586751176775206,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.203028298151033,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.829347211616014,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.937531214490736,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.751488840440786,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.842216382666496,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.08597487597806,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.47502611926415,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.156920927144807,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.271315588318977,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.033589401907374,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.758668193278154,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.249768785047728,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.083777708331514,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.65071984321473,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.808577556909885,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.3363479854054,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.781385627045715,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.51354764816856,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.244040512284588,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.052508078200578,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.68472782780063,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.754415002337957,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.050359646610197,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.139372322358827,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.608666836218497,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.390304384798412,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.755294864625807,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.769885886345527,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.64217330267913,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.567496727939627,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.452190745289975,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.103410082210427,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.732318878072633,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.551393956181727,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.98029490145412,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.851667784878472,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.611190121100737,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.002044708286437,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.49767438083582,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.516690454246778,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.865574011265807,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.2737740582248,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.707763162741568,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.821750613566863,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.438172466107265,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.728020110469213,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.91838057797848,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.967940279190465,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.512630139212444,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.30017689954207,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.010561625635987,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.785574895434852,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.674595781561802,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.817110293365932,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.971065669134944,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.138149326918217,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.291576420484112,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.270944626483086,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.26604863238095,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.874122181011032,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.391002278419805,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.932354167945654,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.035199499070707,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.7160331335868,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.564504599243374,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.91474761581608,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.33057810876095,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.269073923445795,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.821096877585198,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.30245953185685,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.259456930500956,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.741767286830747,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.364647544862923,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.31197297416064,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.81719844204342,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.69335957922599,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.083582960874487,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.9854969385307,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.20700896308832,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.237350040078795,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.827723235869655,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.162915994639565,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.57708153341018,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.55945409436186,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.82925139289803,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.261688577920534,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.117875115871993,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.218670168049133,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.293743281675017,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.33828848947553,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.950214424338533,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.49271065623338,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.909290752376418,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.841948717930705,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.185817993762385,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.258976733623413,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.92323496597951,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.397700521533682,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.379678817211627,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.31750577076995,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.89429908915882,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.82036214193334,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.17536012517373,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.6848140366361,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.854359911000035,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.619996580008436,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.566563212140196,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 17.585095231178848,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.018738286780923,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.10168233924323,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.451933547139852,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.001838025678556,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.2200656713861,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.92535110800572,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.090713261121934,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.042373153335916,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.992345631993302,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.115211370874217,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.014600828137137,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.72073192863722,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.61175873184139,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.124087350597712,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.343592656618455,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.104965173224386,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 23.067096371498632,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.68465838447242,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.903749430257424,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.208815698725516,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.268534089157114,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.236212026031527,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.17294214062111,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.167839366868055,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.389671995476508,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.99332677557903,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.28411311383078,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.12466935955534,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 21.98920561030456,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 18.52907745747676,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.680500125412486,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 19.048775257146836,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.32083402518862,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 22.26068970743054,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.530935730584556,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.57786326179722,
    },
    {
      "Vehicle Class": "Hatchback",
      "Fuel Economy (km/l)": 20.258189520639192,
    },
  ];

  // Calculate average fuel economy for each vehicle class
  const averageFuelEconomy = calculateAverageFuelEconomy(dummyData);

  const fuelEconomy = userInput.distanceTraveled / userInput.fuelConsumed;

  const vehicleClass = userInput.vehicleClass;
  const average = averageFuelEconomy[vehicleClass];
  const deviationThreshold = 0.2; // 20% deviation threshold

  const deviation = Math.abs(fuelEconomy - average) / average;

  if (fuelEconomy > average) {
    return {
      averageFuelEconomy: average,
      userFuelEconomy: fuelEconomy,
      classification: "Green", // User has better fuel economy than average (no problem)
    };
  } else {
    let classification;
    if (deviation <= deviationThreshold) {
      classification = "Green";
    } else if (deviation <= 2 * deviationThreshold) {
      classification = "Yellow";
    } else {
      classification = "Red";
    }

    return {
      averageFuelEconomy: average,
      userFuelEconomy: fuelEconomy,
      classification: classification,
    };
  }
};

export default classifyFuelEconomy;
