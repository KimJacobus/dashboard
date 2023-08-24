#notes on dashboard usecase :

## dashboard for filtering :

---

### user-stories :

[] user can log in with google
[] user can filter on a bunch of criteria
[] user can add item
[] user can delete item
[] user can adjust item

---

### css legend :

#### colors:

[] white : bg-slate-50
[] hover-state : bg-slate-400
[] accent : bg-gray-200
[] dark accent : bg-slate-800

---

### client :

--> example : [https://dribbble.com/shots/20786200-Bress-Admin-Dashboard-Analytics-UX]

-   components :

[] navbar
[] filterbuttons
[] searchbar
[] sidebar
[] account bubble
[]

-   pages :

[] landing page
[] main page
[] add/adjust/delete page

---

### server :

-   routes :

[] add
[] adjust
[] delete

[] filter

---

### mongoDB :

filter = refetch in graphql

---

#### adding subdirectories in git :

[FIX] directory was a submodule add wasn't being added to the main directory had to remote the cached module :
[git rm --cached <subdirectory>]

### things to try :

GSAP!
ESlint
graphql
prettier for tailwind

#### components:

[]

[] grid & list
[x] scrollable grid box on the mainpage, that does not span the entire page

[] being able to launch the searchbar with keys

### setting up eslint :

[PRB] module is undefined
[FIX] add env: { node: grid },

### design mobile:

-   don't think I need to have a burger menu

[WLK] how does fixed & absolute work again relative to the viewport ?

### animated modal :

import { NavBarProps } from '../../../types/NavBarProps'
import { SearchModalInput } from './SearchModalInput'

export const SearchModal = ({
SearchModalToggle,
setSearchModalToggle,
}: NavBarProps) => {
const classNames = {
originalState: 'hidden',
transitionState:
'fixed left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80',
}

return (

<div
className={
!SearchModalToggle
? classNames.originalState
: classNames.transitionState
}
onClick={() => setSearchModalToggle((prevState) => !prevState)} >
<SearchModalInput />
</div>
)
}

### search inputmodal :

[WLK] how to center a modal, on absolute

### structure :

[_states] -> [html, css] -> [comps] -> [input]

[hooks] -> [input] -> [utils] -> [comps]

hooks: fetch hook, sort hooks

[WLK] toggle hook ? unhelpfull ? plus I need different states as well

not needed in this app and confusing, plust you're toggling an object which seems like it might create problems :

import { useCallback, useState } from 'react';

export const useMultiToggle = (initialStates = {}) => {
const [states, setStates] = useState(initialStates);

const toggleState = useCallback((key) => {
setStates((prevStates) => ({
...prevStates,
[key]: !prevStates[key],
}));
}, []);

return [states, toggleState];
};

[fix] i'm just gonna create several unique toggle hooks, i'll only need like three or something anyway.

[WLK] difference between returning this [stuff, setstuff] and tis {stuff, setstuff} in a hook

[PRB] same problem again, I can use the state in the same comp and in the hook but not in a second comp

---> I put the \_Nav in the \_RootPage comp, that way it's easier to pas the prop and I can keep the states in \_RootPage but if I have any other routes I wouldn't have the same navbar ...

### the singleItem comp :

[PRB] how to have only one comp for grid and list ? that links to the singleItem

### adding an X to the ListSelectionButtons :

-> is it better to nly use css for this ? or react? which is javascript

[PRB] do they all need to have seperate states as well ? or do I create an object with booleans ?

[fix] create hook that fills an array with booleans :

import { useState } from 'react'

export const useListSelectionButton = () => {
const [ButtonStates, setButtonStates] = useState<boolean[]>([])

const handleSelectionButton = (index: number) => {
console.log('select!')
console.log(index)

    setButtonStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })

}

console.log(ButtonStates)

return { ButtonStates, handleSelectionButton }
}

--> is gonna be a problem when you actually need to select instances of the data object though

--> but you might already being too much in the front end

### styling the account-sidebar :

-> put sidebar in the dom but use an overflow hidden wrapper?

[WLK] make setStateAction prop optional ?
-> easiest way is just to make a second comp it seems

[WLK] know how the hooks work and how we use the js methods in them

### creating the selection toast :

[PRB] if(selection.length === 1) -> this runs the animation when you unselect stuff as well, animation should only run the first time and then reset on 0 or click

[PRB] how to remove bottom scrollBar ?
[fix] -> [overflow-x: hidden] seems like overkill though

### server :

graphql with typescript ?

### creating the types :

-> Do I only need one type for this DB ?

---> how do I create graphQL queries on the filter buttons again ?

---> how do the type-relations work ?

--> do I have to use Strings for all fields ? because it has to work with a searchbar as well

--> [PersonType]
id, name, availability

[GenderType] :
male, female, nonbinary

[AgeType] :
20-30, 30-40, 40-50

[HairColorType] :
brown, black, blond, red, blue, green

[LocationType] :
on cities or coordinates ?

### creating mutations :

[PRB] "message": "The type of Mutation.addPerson(gender:) must be Input Type but got: gender."
--> don't really know what this means

https://stackoverflow.com/questions/41743253/whats-the-point-of-input-type-in-graphql/55881719#55881719

### front end querires -> data-structure & type relations ? :

[WLK] querrying graphql from the front-end without apollo ?

[WLK] still struggling with queries and types in graphql, and GraphQLLists etc

[WLK] why is my collection on mongoDB automatically called "test" ?
[fix] --> you have to specifiy the name in the uri :

'mongodb+srv://jacobuskim:JSLY6bccVaDUZjpj@dashboard.ujdqfva.mongodb.net/[dashdb]?retryWrites=true&w=majority'

[WLK] how to use faker js ?

### creating queries based on gender :

[fix] though a little unsure of how :

-> pass in an object :

const vars = {
filter: 'gender',
argument: 'Female',
}

-> then :

export const getPeopleQuery = gql`  query GetPeople($filter: String, $argument: String) {
    people(filter: $filter, argument: $argument) {
      name
      id
      gender
      picture
      availability
    }
  }`

-> and use the object literal like this :

return Person.find({[args.filter]: args.argument })

### creating the filterbuttons in the front-end :

[PRB] having problems again with creating a mappable object

[fix] this is how you do it :

export const ButtonInput = [
{
text: 'Male',
input: {
filter: 'gender',
argument: 'Male',
},
},
{
text: 'Female',
input: {
filter: 'gender',
argument: 'Female',
},
},
{
text: 'Non-binary',
input: {
filter: 'gender',
argument: 'Non-binary',
},
},
];

[WLK] useLazyQuery Apollo ? :

--> don't think I should use LazyQuery, I need the query to load, when the component loads, without a specified query
then, onClick, set the query to an keypair object

--> might have to store the input variables inside a state in the hook first ?

--> then refetch with a useEffect I think, don't need to use refetchQuerries

### recheck :

#### Queries:

const people = [{
firstname,
lastname
gender,
\_id,
height {

haircolor,
weight
skincolor {
brown,
white,
black,
asian

}
aparent ethnicity,
language,
city,
adress
phone number,
email
pictures, string[]
shoesize,
waist-size,
age,
}]

filter by skin color then show what type of skin color

[PRB] states are in lowercase : Selection -> selection

--> recheck must haves :

[] select panier
[] filterbuttons
[] search bar
[] deploy

--> sidebar with jobs? what would that look like ? what can we select on ? nested queries ?

[] projects : asign and create projects: mutate adjust and mutate create
[] booked : show all booked models
[]
[] available : show all available models

#### creating bigger objects :

[PRB] can i make a property selectable between only a few strings ? like hairColor : ["Brown, "Black", "Blond"]
--> would be easy with typescript objects ?

[WLK] difference between typecasting like this :

-> export const people: Ipeople[] = [...] - Specifies that people is a constant of type Ipeople[], i.e., an array of Ipeople objects.
-> interface Ipeople { ... }[] - Defines an array of objects that conform to the Ipeople interface.

[PRB] don't seem to know how to add string arrays to mongo

-> creating a value with enum validation in the mongoose schema ? :
city: {
type: String,
enum: ['Brussels', 'Antwerp'],
},

### creating the useFilterButtons hook :

'works' without lazyquery, don't know why this took me all day though. I really can't seem to concentrate at becode some days

### wrap a rootLayout around the comps :

trying to wrap a grid around the lg comps
[fix] --> had to increase height of navbar to fit the grid...

[PRB] animating tailwind classes onClick, still can't figure it out

--> supposed to use the headless ui stuff ? : [https://headlessui.com/react/transition]

---

[WLK] useContext for darkmode ?

### put the data into the grid/list :

[WLK] how do I typecast the queryData?

--> like this :
export type dataProps = {
loading: boolean
error?: ApolloError
data?: {
people: []
}
}

[fix] data.people.length -> exists

[PRB] i'm losing most of my time with typecasting and arranging components ?

[WLK] can I fetch a mongoDB objectID as a string ?

---

### filtering on a single ID :

[PRB] can't seem to use ObjectId() method correctly ?
--> i'm using the BSON type ?

[WLK] state handling inside a component!

(error) & (loading) & (data)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>

### recheck dashboard

[] weekend -> google login

[] more fake data

[] clean up single model page

[] make projects page

[] make projects assignable and unnassignable. --> don't try to do everything on the front end e.g. assigning & unassigning buttons should immediately talk to the API and check/change the DB everytime.

[] host the project somewhere

[] add darkmode

[] add proper links

#### creating @ ts-paths

[PRB] it worked yesterday but now the paths can't resolve for some reason

[FIX] --> add aliases to vite config, be sure to use the right syntax no '\*' at the end of the paths

[https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo?signin=true]

[!!!] --> vite-tsconfig-paths npm dependency allows vite to import ts paths

#### clean up single model page
