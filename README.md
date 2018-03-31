#### Create a Skills Progress Bar with React, using HTML, CSS, and some Javascript

Let's get started!

#### Tools.js
* Create the template for your tools skills, and add your classNames.
..* data-percent is a value that will be displayed on the interface.
```
<div className="wrap">
  <div className="bar_wrap">
    <label>Github</label>
    <div className="bar">
      <div className="inner_bar github-75" data-percent="75%" />
    </div>
  </div>
</div>
```

#### GroupSkills.js
* Import your skills
```
import Tools from "./Tools";
```

* Set the state. The number provided to displayedSkill will decide which component to render
* manageIndex changes the state onClick. Provide the name from ```e.target``` and set the state to it.
```
constructor(props) {
  super(props);
  this.state = {
    displayedSkill: 1
    };
}

 manageIndex = e => {
  const { name } = e.target;
  this.setState({
    displayedSkill: parseInt(name)
    });
};
```

###### GroupSkills.js - Render
* Having access to the state
```
const { displayedSkill } = this.state;
```

###### GroupSkills.js - Return
* If displayedSkill is set to 1 then render the Tools component
* The button will update displayedSkill's value onClick
```
<div className="skills_component">
  <div className="progress_wrap">
    {displayedSkill === 1 ? <Tools /> : null}
    <div className="pagination">
      <button className="page" name="1" onClick={this.manageIndex}>Languages</button>
    </div>
  </div>
</div>
```

![screen shot 2018-03-29 at 8 43 48 pm](https://user-images.githubusercontent.com/31966603/38120975-fb631316-3391-11e8-9674-cc05eca53085.png)

