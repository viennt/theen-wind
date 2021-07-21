const partials = [
  {
    key: 'utils.api.name',
    value: '{{properCase (plural apiName)}}Api',
  },
  {
    key: 'utils.api.get-id-method',
    value: 'getNext{{properCase (singular apiName)}}Id',
  },
  {
    key: 'utils.api.get-list-method',
    value: 'get{{properCase (plural apiName)}}',
  },
  {
    key: 'utils.api.get-single-method',
    value: 'get{{properCase (singular apiName)}}',
  },
  {
    key: 'utils.api.add-method',
    value: 'addNew{{properCase (singular apiName)}}',
  },
  {
    key: 'utils.api.update-method',
    value: 'update{{properCase (singular apiName)}}',
  },
  {
    key: 'utils.api.delete-method',
    value: 'delete{{properCase (singular apiName)}}',
  },
  {
    key: 'utils.route.name',
    value: '{{camelCase (plural routeName)}}',
  },
  {
    key: 'utils.route.name-as',
    value: '{{camelCase (plural routeName)}}Routes',
  },
  {
    key: 'utils.import.api',
    value: "import { {{>utils.api.name}} } from 'Services/Api';\n",
  },
  {
    key: 'utils.import.route',
    value:
      "import { {{>utils.route.name}} as {{>utils.route.name-as}} } from 'Utils/namedRoutes';\n",
  },
  {
    key: 'utils.model.individualId',
    value: '{{ camelCase (singular name) }}No',
  },
];

module.exports = partials;
